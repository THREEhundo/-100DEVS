//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
	.then((res) => res.json())
	.then((data) => {
		let totalDrinks = data.drinks.length
		let random = Math.random()
		let randomIndex = Math.floor(random * totalDrinks)
		let randomDrink = data.drinks[randomIndex]
		console.log(randomDrink)
	})

let cocktailName = document.querySelector('h2')
let cocktailImg = document.querySelector('img')
let coctailInstructionsHeader = document.querySelector('#instructions')
let cocktailInstructions = document.createElement('p')
let ingredients = document.querySelector('ul')
let video = document.querySelector('embed')

coctailInstructionsHeader.appendChild(cocktailInstructions)

document
	.querySelector('button[name="random-drink"]')
	.addEventListener('click', () => getCocktails())

// ! GET COCKTAILS
const getCocktails = () => {
	const userInput = document.querySelector('input').value
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
		.then((res) => res.json())
		.then((data) => {
			let drinksLength = data.drinks.length
			console.log(drinksLength)
			let fetchedDrink =
				randomDrink(drinksLength, data.drinks) || data.drinks[0]
			cocktailName.innerHTML = fetchedDrink.strDrink
			cocktailImg.src = fetchedDrink.strDrinkThumb
			cocktailImg.alt = fetchedDrink.strDrink
			cocktailInstructions.innerHTML = fetchedDrink.strInstructions
			ingredients.innerHTML = ''
			ingredients.innerHTML = 'Ingredients'

			for (const property in fetchedDrink) {
				if (
					property.includes('strIngredient') &&
					fetchedDrink[property] !== null
				) {
					let ingredient = document.createElement('li')
					ingredient.innerHTML = fetchedDrink[property]
					ingredients.appendChild(ingredient)
				}
				if (property === 'strVideo' && fetchedDrink['strVideo'] !== null) {
					console.log(fetchedDrink['strVideo'])
					const embedLink = fetchedDrink['strVideo'].replace(
						'watch?v=',
						'embed/',
					)
					video.src = embedLink
				}
			}
		})
		.catch((err) => console.error(err))
}

const btn = document
	.querySelector('button[name="button"]')
	.addEventListener('click', () => getCocktails())

const inputEnter = document
	.querySelector('input')
	.addEventListener('keypress', (e) => e.key === 'Enter' && getCocktails())

// ! MAKE A CAROUSEL

function randomDrink(drinks) {
	console.log(drinks)
	let totalDrinks = drinks.length
	let random = Math.random()
	let randomIndex = Math.floor(random * totalDrinks)
	let randomDrink = drinks[randomIndex]
	return randomDrink
}
const randomDrinkMaker = () => {
	const userInput = document.querySelector('input').value
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
		.then((res) => res.json())
		.then((data) => {
			let drinks = data.drinks
			let totalDrinks = drinks.length
			let rand = Math.random()
			let randomIndex = Math.floor(rand * totalDrinks)
			let randomDrink = drinks[randomIndex]
			cocktailName.innerHTML = randomDrink.strDrink
			cocktailImg.src = randomDrink.strDrinkThumb
			cocktailImg.alt = randomDrink.strDrink
			cocktailInstructions.innerHTML = randomDrink.strInstructions
			ingredients.innerHTML = ''
			ingredients.innerHTML = 'Ingredients'
			for (const property in randomDrink) {
				if (
					property.includes('strIngredient') &&
					randomDrink[property] !== null
				) {
					let ingredient = document.createElement('li')
					ingredient.innerHTML = randomDrink[property]
					ingredients.appendChild(ingredient)
				}
				if (property === 'strVideo' && randomDrink['strVideo'] !== null) {
					console.log(randomDrink['strVideo'])
					const embedLink = randomDrink['strVideo'].replace(
						'watch?v=',
						'embed/',
					)
					video.src = embedLink
				}
			}
		})
		.catch((err) => console.log(`error ${err}`))
}
// ! PLAY AROUND WITH THE DATABASE

// ! BUILD 3 APPS
