class Player {
	constructor(player) {
		this.player = player
		this.hand = []
	}
	total() {
		return this.hand.reduce((acc, curr) => (acc += curr.numVal), 0)
	}
	dealerTwoCardTotal() {
		if (this.player === 'Player') return
		let handCopy = [...this.hand]
		let hiddenHand = handCopy.shift()
		return hiddenHand.numVal
	}
}

class Dealer extends Player {
	constructor(player, hand) {
		super(player, hand)
	}

	dealerTwoCardTotal() {
		super.dealerTwoCardTotal()
	}

	flipFaceDownCard() {
		hiddenCard.classList.add('none')
		card1.classList.remove('none')
		dealerPartialTotal.classList.add('none')
		dealerTotal.classList.toggle('none')
		if (super.total() === 21 && player.total() < 21)
			result.innerHTML = 'Dealer has Blackjack! You Lose!'
		if (super.total() > 21 && player.total() <= 21)
			result.innerHTML = 'Dealer busted! You Win!'
		if (super.total() < 17 && player.total() <= 21)
			this.firstHit() /* fetch again return */
		if (
			super.total() > 16 &&
			super.total() < 22 &&
			player.total() > super.total()
		)
			result.innerHTML = 'Player wins!'
		if (super.total() > player.total() && super.total() <= 21)
			result.innerHTML = 'Dealer wins!'
		if (super.total() == player.total() && super.total() <= 21)
			result.innerHTML = 'Push!'
	}

	firstHit() {
		fetch(
			`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
				'deck_id'
			)}/draw/?count=1`
		)
			.then((res) => res.json())
			.then((data) => {
				let nextFetchedCard = data.cards[0]
				nextFetchedCard.numVal = cardScore(data.cards[0].value)
				dealer.hand = [...dealer.hand, nextFetchedCard]
				dealerTotal.innerHTML = super.total()

				let nextCard = document.createElement('img')
				nextCard.src = nextFetchedCard.image
				nextCard.classList.add('hit-card')

				dealerCards.appendChild(nextCard)
				//if (
				//	(super.total() === 17 && super.total() > player.total()) ||
				//	(super.total() > 17 && super.total() < 22 && super.total()) >
				//		player.total()
				//)
				//	result.innerHTML = 'Dealer Wins!'
				if (
					super.total() >= 17 &&
					super.total() <= 21 &&
					super.total() > player.total()
				)
					result.innerHTML = 'Dealer Wins!'

				if (super.total() > 21) result.innerHTML = 'You Win! Dealer Busts'
				if (super.total() < 17 && player.total() <= 21) this.firstHit()
				if (
					super.total() >= 17 &&
					dealer.total <= 21 &&
					player.total() < dealer.total
				)
					result.innerHTML = `Dealer Wins`
				if (dealer.total >= 21 && player.total() > super.total())
					result.innerHTML = `Player Wins`
			})
	}
}

//let blob = {
//	name: 'Ditto',
//	setName: function () {
//		console.log(`Name is ${this.name}`)
//		this.sayName()
//	},
//	sayName: function () {
//		console.log(`yoyoyo`)
//	}
//}
//blob.setName()
class Deck {
	constructor() {
		this.deckData
	}
	// Shuffle Cards Method (Get a Brand New Deck)
	fetchDeck() {
		const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6'
		fetch(url)
			.then((res) => res.json()) // parse response as JSON
			.then((data) => {
				this.deckData = data
				console.log(this.deckData)
				this.setLocalStorage()
				this.showRemainingCardsInDeck()
			})
			.catch((err) => {
				console.log(`error ${err}`)
			})
	}

	// set local storage
	setLocalStorage() {
		return localStorage.setItem('deck_id', this.deckData.deck_id)
	}
	// show remaining cards
	showRemainingCardsInDeck() {
		cardsLeft.innerHTML = this.deckData.remaining
	}
	// Draw Cards Method
	dealHand() {
		fetch(
			`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
				'deck_id'
			)}/draw/?count=4`
		)
			.then((res) => res.json())
			.then((data) => {
				this.deckData = data
				dealer.hand.push(this.deckData.cards[0], this.deckData.cards[1])
				player.hand.push(this.deckData.cards[2], this.deckData.cards[3])

				card1.src = dealer.hand[0].image
				card2.src = dealer.hand[1].image

				card3.src = player.hand[0].image
				card4.src = player.hand[1].image

				dealer.hand[0].numVal = this.cardScore(this.deckData.cards[0].value)
				dealer.hand[1].numVal = this.cardScore(this.deckData.cards[1].value)

				player.hand[0].numVal = this.cardScore(this.deckData.cards[2].value)
				player.hand[1].numVal = this.cardScore(this.deckData.cards[3].value)

				dealerTotal.innerHTML = dealer.total()
				playerTotal.innerHTML = player.total()
				cardsLeft.innerHTML = this.deckData.remaining

				// hide first dealer card and dealer total
				// show dealer partial total
				dealerPartialTotal.innerHTML = dealer.dealerTwoCardTotal()

				// blackjack condition
				if (player.total() === 21 && dealer.total() !== 21)
					return (result.innerHTML = 'BLACKJACK! You Win!')
			})
	}
	cardScore(card) {
		return card === 'ACE'
			? 11
			: card === 'KING' || card === 'QUEEN' || card === 'JACK'
			? 10
			: Number(card)
	}

	clearHands() {
		dealerAndPlayer.forEach((player) => (player.hand = []))
		document.querySelectorAll('img').src = ''
		// remove display for imgs
		result.innerHTML = ``
		//while (dealerCards.childElementCount > 3) dealCards.
		removeElementsByClass('hit-card')
		currentDeck.dealHand()
	}
}
// remove display for img
// add back on when flipping cards

const dealer = new Dealer('Dealer')
const player = new Player('Player')
const dealerAndPlayer = [dealer, player]
const currentDeck = new Deck()
const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const card4 = document.querySelector('#card4')
const result = document.querySelector('#result')
const hiddenCard = document.querySelector('#hidden-card')
const dealerTotal = document.querySelector('#dealer-total')
const dealerPartialTotal = document.querySelector('#dealer-partial-total')
const dealerCards = document.querySelector('.dealer-cards')
const playerCards = document.querySelector('.player-cards')
const cardsLeft = document.querySelector('#cards-left')
const playerTotal = document.querySelector('#player-total')
const stay = document.querySelector('button[name="stay"]')
const dealCards = document.querySelector('button[name="deal"]')
const shuffleCards = document.querySelector('button[name="shuffle"]')

//let card1Val, card2Val, card3Val, card4Val
//console.log(dealer)
document
	.querySelector('button')
	.addEventListener('click', currentDeck.fetchDeck())

function getFetch() {
	const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6'
	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			currentDeck.fetchDeck()
			localStorage.setItem('deck_id', data.deck_id)
			document.querySelector('#cards-left').innerHTML = data.remaining
		})
		.catch((err) => {
			console.log(`error ${err}`)
		})
}

shuffleCards.addEventListener('click', () => currentDeck.fetchDeck())

dealCards.addEventListener('click', () => currentDeck.dealHand())

const dealFourCards = () => {
	let draw = fetch(
		`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
			'deck_id'
		)}/draw/?count=4`
	)
		.then((res) => res.json())
		.then((data) => {
			dealer.hand.push(data.cards[0], data.cards[1])
			player.hand.push(data.cards[2], data.cards[3])

			card1.src = dealer.hand[0].image
			card2.src = dealer.hand[1].image

			card3.src = player.hand[0].image
			card4.src = player.hand[1].image

			dealer.hand[0].numVal = cardScore(data.cards[0].value)
			dealer.hand[1].numVal = cardScore(data.cards[1].value)

			player.hand[0].numVal = cardScore(data.cards[2].value)
			player.hand[1].numVal = cardScore(data.cards[3].value)

			let dealerTotal = (document.querySelector('#dealer-total').innerHTML =
				dealer.total())
			playerTotal.innerHTML = player.total()
			cardsLeft.innerHTML = data.remaining

			// hide first dealer card and dealer total
			// show dealer partial total
			dealerPartialTotal.innerHTML = dealer.dealerTwoCardTotal()

			// blackjack condition
			if (player.total() === 21 && dealer.total() !== 21)
				return (result.innerHTML = 'BLACKJACK! You Win!')
		})
	console.log(draw.cards)
}

// ! HW
// Store deck into local storage
// 'deck_id'
function cardScore(card) {
	return card === 'ACE'
		? 11
		: card === 'KING' || card === 'QUEEN' || card === 'JACK'
		? 10
		: Number(card)
}

// hide dealer's first card
// create stay or hit button
// click stay -> flip over dealer first card

stay.addEventListener('click', () => {
	dealer.flipFaceDownCard()
})

function flipDealersCard() {
	hiddenCard.classList.add('none')
	card1.classList.remove('none')
	dealerPartialTotal.classList.add('none')
	dealerTotal.classList.toggle('none')
	if (dealer.total() === 21 && player.total() < 21)
		result.innerHTML = 'Dealer has Blackjack! You Lose!'
	if (dealer.total() > 21 && player.total() <= 21)
		result.innerHTML = 'Dealer busted! You Win!'
	if (dealer.total() < 17 && player.total() <= 21)
		firstHit() /* fetch again return */
	if (
		dealer.total() > 16 &&
		dealer.total() < 22 &&
		player.total() > dealer.total()
	)
		result.innerHTML = 'Player wins!'
	if (dealer.total() > player.total() && dealer.total() <= 21)
		result.innerHTML = 'Dealer wins!'
	if (dealer.total() == player.total() && dealer.total() <= 21)
		result.innerHTML = 'Push!'
}

// ! Use data to count card and keep adding?
function firstHit() {
	fetch(
		`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
			'deck_id'
		)}/draw/?count=1`
	)
		.then((res) => res.json())
		.then((data) => {
			let nextFetchedCard = data.cards[0]
			nextFetchedCard.numVal = cardScore(data.cards[0].value)
			dealer.hand = [...dealer.hand, nextFetchedCard]
			dealerTotal.innerHTML = dealer.total()

			let nextCard = document.createElement('img')
			nextCard.src = nextFetchedCard.image
			nextCard.classList.add('hit-card')

			dealerCards.appendChild(nextCard)
			//if (
			//	(dealer.total() === 17 && dealer.total() > player.total()) ||
			//	(dealer.total() > 17 && dealer.total() < 22 && dealer.total()) >
			//		player.total()
			//)
			//	result.innerHTML = 'Dealer Wins!'
			if (
				dealer.total() >= 17 &&
				dealer.total() <= 21 &&
				dealer.total() > player.total()
			)
				result.innerHTML = 'Dealer Wins!'

			if (dealer.total() > 21) result.innerHTML = 'You Win! Dealer Busts'
			if (dealer.total() < 17 && player.total() <= 21) firstHit()
			if (
				dealer.total() >= 17 &&
				dealer.total <= 21 &&
				player.total() < dealer.total
			)
				result.innerHTML = `Dealer Wins`
			if (dealer.total >= 21 && player.total() > dealer.total())
				result.innerHTML = `Player Wins`
		})
}

const nextHandBtn = document.querySelector('button[name="next-hand"]')
nextHandBtn.addEventListener('click', clearHands)

// ! New Hand needs to have first dealer card face down.
// ! Result h1 needs to be cleared
// ! third card + needs to be removed
function clearHands() {
	dealerAndPlayer.forEach((player) => (player.hand = []))
	document.querySelectorAll('img').src = ''
	result.innerHTML = ``
	//while (dealerCards.childElementCount > 3) dealCards.
	removeElementsByClass('hit-card')
	currentDeck.dealHand()
}

// removes card images for the extra hit cards
function removeElementsByClass(className) {
	const elements = document.getElementsByClassName(className)
	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0])
	}
}

// ! need dealers first card to be hidden on next hand
// toggle hidden class on dealer first card
// hide first card actual
