//Example fetch using pokemonapi.co
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
//
//let card1 = document.querySelector('#card1')
//let card2 = document.querySelector('#card2')
//let card3 = document.querySelector('#card3')
//let card4 = document.querySelector('#card4')

const dealFourCards = () => {
	let draw = fetch(
		`https://deckofcardsapi.com/api/deck/${localStorage.getItem(
			'deck_id',
		)}/draw/?count=4`,
	)
		.then((res) => res.json())
		.then((data) => {
			let card1 = (document.querySelector('#card1').src = data.cards[0].image)
			let card2 = (document.querySelector('#card2').src = data.cards[1].image)
			let card3 = (document.querySelector('#card3').src = data.cards[2].image)
			let card4 = (document.querySelector('#card4').src = data.cards[3].image)
			let card1Val = cardScore(data.cards[0].value)
			let card2Val = cardScore(data.cards[1].value)
			let card3Val = cardScore(data.cards[2].value)
			let card4Val = cardScore(data.cards[3].value)
			let dealerTotal = totalScore(card1Val, card2Val)
			let playerTotal = totalScore(card3Val, card4Val)
			document.querySelector('#dealer-total').innerHTML = dealerTotal
			document.querySelector('#player-total').innerHTML = playerTotal
			document.querySelector('#cards-left').innerHTML = data.remaining
		})
	console.log(draw.cards)
}

// ! HW
// Store deck into local storage
// 'deck_id'
function cardScore(card) {
	return card === 'ACE' ||
		card === 'KING' ||
		card === 'QUEEN' ||
		card === 'JACK'
		? 10
		: Number(card)
}

function totalScore(card1, card2) {
	return card1 + card2
}
