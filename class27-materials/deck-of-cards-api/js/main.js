class BlackjackHand {
	constructor(player, card1, card2, card3, card4, card5, card6, card7, card8) {
		this.player = player
		this.card1 = card1 || {
			image: '',
			images: '',
			value: '',
			suit: '',
			code: '',
			numVal: 0,
		}
		this.card2 = card2 || {
			image: '',
			images: '',
			value: '',
			suit: '',
			code: '',
			numVal: 0,
		}
		this.card3 = card3 || {
			image: '',
			images: '',
			value: '',
			suit: '',
			code: '',
			numVal: 0,
		}
		this.card4 = card4 || {
			image: '',
			images: '',
			value: '',
			suit: '',
			code: '',
			numVal: 0,
		}
		this.card5 = card5 || {
			image: '',
			images: '',
			value: '',
			suit: '',
			code: '',
			numVal: 0,
		}
		this.card6 = card6 || {
			image: '',
			images: '',
			value: '',
			suit: '',
			code: '',
			numVal: 0,
		}
		this.card7 = card7 || {
			image: '',
			images: '',
			value: '',
			suit: '',
			code: '',
			numVal: 0,
		}
		this.card8 = card8 || {
			image: '',
			images: '',
			value: '',
			suit: '',
			code: '',
			numVal: 0,
		}
	}
	total() {
		console.log(
			this.card1.numVal +
				this.card2.numVal +
				this.card3.numVal +
				this.card4.numVal +
				this.card5.numVal +
				this.card6.numVal +
				this.card7.numVal +
				this.card8.numVal,
		)
		return (
			this.card1.numVal +
			this.card2.numVal +
			this.card3.numVal +
			this.card4.numVal +
			this.card5.numVal +
			this.card6.numVal +
			this.card7.numVal +
			this.card8.numVal
		)
	}
	dealerHiddenTotal() {
		console.log(
			this.card2.numVal +
				this.card3.numVal +
				this.card4.numVal +
				this.card5.numVal +
				this.card6.numVal +
				this.card7.numVal +
				this.card8.numVal,
		)
		return (
			this.card2.numVal +
			this.card3.numVal +
			this.card4.numVal +
			this.card5.numVal +
			this.card6.numVal +
			this.card7.numVal +
			this.card8.numVal
		)
	}
}

const dealer = new BlackjackHand('Dealer')
const player = new BlackjackHand('Player')
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
//let card1Val, card2Val, card3Val, card4Val

const dealFourCards = () => {
	let draw = fetch(
		`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
			'deck_id',
		)}/draw/?count=4`,
	)
		.then((res) => res.json())
		.then((data) => {
			dealer.card1 = data.cards[0]
			dealer.card2 = data.cards[1]

			player.card1 = data.cards[2]
			player.card2 = data.cards[3]

			card1.src = dealer.card1.image
			card2.src = dealer.card2.image

			card3.src = player.card1.image
			card4.src = player.card2.image

			dealer.card1.numVal = cardScore(data.cards[0].value)
			dealer.card2.numVal = cardScore(data.cards[1].value)

			player.card1.numVal = cardScore(data.cards[2].value)
			player.card2.numVal = cardScore(data.cards[3].value)

			//card2Val = cardScore(data.cards[1].value)

			//card3Val = cardScore(data.cards[2].value)

			//card4Val = cardScore(data.cards[3].value)

			let dealerTotal = (document.querySelector('#dealer-total').innerHTML =
				dealer.total())
			document.querySelector('#player-total').innerHTML = player.total()
			document.querySelector('#cards-left').innerHTML = data.remaining

			// hide first dealer card and dealer total
			// show dealer partial total
			dealerPartialTotal.innerHTML = dealer.dealerHiddenTotal()

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
	if (dealer.total() === 21)
		result.innerHTML = 'Dealer has Blackjack! You Lose!'
	if (dealer.total() > 21) result.innerHTML = 'Dealer busted! You Win!'
	if (dealer.total() < 21) return /* fetch again return */
}
// show winner
// hit -> fetch another card and add to player 1
// hit or stay ->
// 1. bust
// 2. under
// 3. 21
