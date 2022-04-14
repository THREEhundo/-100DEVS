class BlackjackHand {
	constructor(
		player,
		card1,
		card2,
		card3,
		card4,
		card5,
		card6,
		card7,
		card8,
		card1Img,
		card2Img,
		card3Img,
		card4Img,
		card5Img,
		card6Img,
		card7Img,
		card8Img,
	) {
		this.player = player
		this.card1 = card1 || 0
		this.card2 = card2 || 0
		this.card3 = card3 || 0
		this.card4 = card4 || 0
		this.card5 = card5 || 0
		this.card6 = card6 || 0
		this.card7 = card7 || 0
		this.card8 = card8 || 0
		this.card1Img = card1Img || ''
		this.card2Img = card2Img || ''
		this.card3Img = card3Img || ''
		this.card4Img = card4Img || ''
		this.card5Img = card5Img || ''
		this.card6Img = card6Img || ''
		this.card7Img = card7Img || ''
		this.card8Img = card8Img || ''
	}
	total() {
		return (
			this.card1 +
			this.card2 +
			this.card3 +
			this.card4 +
			this.card5 +
			this.card6 +
			this.card7 +
			this.card8
		)
	}
	dealerHiddenTotal() {
		return (
			this.card2 +
			this.card3 +
			this.card4 +
			this.card5 +
			this.card6 +
			this.card7 +
			this.card8
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
let card1Val, card2Val, card3Val, card4Val

const dealFourCards = () => {
	let draw = fetch(
		`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
			'deck_id',
		)}/draw/?count=4`,
	)
		.then((res) => res.json())
		.then((data) => {
			card1.src = data.cards[0].image
			dealer.card1Img = data.cards[0].image

			card2.src = data.cards[1].image
			dealer.card2Img = data.cards[1].image

			card3.src = data.cards[2].image
			player.card1Img = data.cards[2].image

			card4.src = data.cards[3].image
			player.card2Img = data.cards[3].image

			card1Val = cardScore(data.cards[0].value)
			dealer.card1 = cardScore(data.cards[0].value)

			card2Val = cardScore(data.cards[1].value)
			dealer.card2 = cardScore(data.cards[1].value)

			card3Val = cardScore(data.cards[2].value)
			player.card1 = cardScore(data.cards[2].value)

			card4Val = cardScore(data.cards[3].value)
			player.card2 = cardScore(data.cards[3].value)

			//let dealerTotalScore = totalScore(card1Val, card2Val)
			//let playerTotal = totalScore(card3Val, card4Val)
			let dealerTotal = (document.querySelector('#dealer-total').innerHTML =
				dealer.dealerHiddenTotal())
			document.querySelector('#player-total').innerHTML = player.total()
			document.querySelector('#cards-left').innerHTML = data.remaining

			// hide first dealer card and dealer total
			// show dealer partial total
			let dealerPartialTotal = (document.querySelector(
				'#dealer-partial-total',
			).innerHTML = card2Val)

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

function totalScore(card1, card2) {
	return card1 + card2
}

// hide dealer's first card
// create stay or hit button
// click stay -> flip over dealer first card
const stay = document.querySelector('button[name="stay"]')
stay.addEventListener('click', () => {
	flipDealersCard()
})

function flipDealersCard() {}
// show winner
// hit -> fetch another card and add to player 1
// hit or stay ->
// 1. bust
// 2. under
// 3. 21
