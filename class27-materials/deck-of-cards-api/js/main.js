class BlackjackHand {
	constructor(player, hand) {
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

const dealer = new BlackjackHand('Dealer')
const player = new BlackjackHand('Player')
const dealerAndPlayer = [dealer, player]
console.log(dealer)
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
	//const choice = document.querySelector('input').value
	let newDeck

	const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6'
	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			localStorage.setItem('deck_id', data.deck_id)
			document.querySelector('#cards-left').innerHTML = data.remaining
		})
		.catch((err) => {
			console.log(`error ${err}`)
		})
	console.log(newDeck)
}

const shuffleCards = document.querySelector('button[name="shuffle"]')
shuffleCards.addEventListener('click', () => getFetch())

const dealCards = document.querySelector('button[name="deal"]')
dealCards.addEventListener('click', () => dealFourCards())

let card1 = document.querySelector('#card1')
let card2 = document.querySelector('#card2')
let card3 = document.querySelector('#card3')
let card4 = document.querySelector('#card4')
let result = document.querySelector('#result')
let hiddenCard = document.querySelector('#hidden-card')
let dealerTotal = document.querySelector('#dealer-total')
let dealerPartialTotal = document.querySelector('#dealer-partial-total')
let dealerCards = document.querySelector('.dealer-cards')
let playerCards = document.querySelector('.player-cards')
//let card1Val, card2Val, card3Val, card4Val

const dealFourCards = () => {
	let draw = fetch(
		`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
			'deck_id',
		)}/draw/?count=4`,
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
			document.querySelector('#player-total').innerHTML = player.total()
			document.querySelector('#cards-left').innerHTML = data.remaining

			// hide first dealer card and dealer total
			// show dealer partial total
			dealerPartialTotal.innerHTML = dealer.dealerTwoCardTotal()

			// blackjack condition
			if (player.total() === 21)
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
const stay = document.querySelector('button[name="stay"]')
stay.addEventListener('click', () => {
	flipDealersCard()
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
		dealerFirstHit() /* fetch again return */
}

// ! Use data to count card and keep adding?
function dealerFirstHit() {
	fetch(
		`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
			'deck_id',
		)}/draw/?count=1`,
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
			if (dealer.total() < 17 && player.total() <= 21) dealerFirstHit()
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
	dealFourCards()
}

// removes card images for the extra hit cards
function removeElementsByClass(className) {
	const elements = document.getElementsByClassName(className)
	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0])
	}
}
