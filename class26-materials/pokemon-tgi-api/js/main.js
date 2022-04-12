let cardSection = document.querySelector('section')
let userInput = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener('click', () => getPokemon(userInput.value))
userInput.addEventListener(
	'keypress',
	(e) => e.key === 'Enter' && getPokemon(userInput.value),
)

const getPokemon = (userInput) => {
	fetch(`https://api.pokemontcg.io/v2/cards`)
		.then((res) => res.json())
		.then((pokemon) => {
			console.log(pokemon)
			userInput.capita
			let search = []
			let searchCards = pokemon.data.map((pokemon) => {
				let formatUserInput = capitalizeFirstLetter(userInput)
				if (pokemon.name === formatUserInput) search.push(pokemon)
			})
			cardSection.innerHTML = ''
			search.forEach((card) => {
				let pokemonCard = document.createElement('img')
				pokemonCard.src = card.images.small
				pokemonCard.alt = card.flavorText
				cardSection.appendChild(pokemonCard)
			})
		})
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
//
//
//0:
//abilities: [{…}]
//artist: "Daisuke Ito"
//attacks: [{…}]
//cardmarket: {url: 'https://prices.pokemontcg.io/cardmarket/dp3-3', updatedAt: '2022/04/11', prices: {…}}
//convertedRetreatCost: 3
//evolvesFrom: "Charmeleon"
//flavorText: "It is said that CHARIZARD's fire burns hotter if it has experienced harsh battles."
//hp: "130"
//id: "dp3-3"
//images: {small: 'https://images.pokemontcg.io/dp3/3.png', large: 'https://images.pokemontcg.io/dp3/3_hires.png'}
//legalities: {unlimited: 'Legal'}
//level: "55"
//name: "Charizard"
//nationalPokedexNumbers: [6]
//number: "3"
//rarity: "Rare Holo"
//resistances: [{…}]
//retreatCost: (3) ['Colorless', 'Colorless', 'Colorless']
//set: {id: 'dp3', name: 'Secret Wonders', series: 'Diamond & Pearl', printedTotal: 132, total: 132, …}
//subtypes: ['Stage 2']
//supertype: "Pokémon"
//tcgplayer: {url: 'https://prices.pokemontcg.io/tcgplayer/dp3-3', updatedAt: '2022/04/11', prices: {…}}
//types: ['Fire']
//weaknesses: [{…}]
//[[Prototype]]: Object
