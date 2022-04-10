//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
	.then((res) => res.json())
	.then((data) => console.log(data.drinks[0]))

let cocktailName = document.querySelector('h2')
let cocktailImg = document.querySelector('img')
let coctailInstructionsHeader = document.querySelector('#instructions')
let cocktailInstructions = document.createElement('p')
let ingredients = document.querySelector('ul')
let video = document.querySelector('embed')

coctailInstructionsHeader.appendChild(cocktailInstructions)

// ! GET COCKTAILS
const getCocktails = () => {
	const userInput = document.querySelector('input').value
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.drinks[0])
			cocktailName.innerHTML = data.drinks[0].strDrink
			cocktailImg.src = data.drinks[0].strDrinkThumb
			cocktailImg.alt = data.drinks[0].strDrink
			cocktailInstructions.innerHTML = data.drinks[0].strInstructions
			for (const property in data.drinks[0]) {
				if (
					property.includes('strIngredient') &&
					data.drinks[0][property] !== null
				) {
					let ingredient = document.createElement('li')
					ingredient.innerHTML = data.drinks[0][property]
					ingredients.appendChild(ingredient)
				}
				if (property === 'strVideo' && data.drinks[0]['strVideo'] !== null) {
					console.log(data.drinks[0]['strVideo'])
					const embedLink = data.drinks[0]['strVideo'].replace(
						'watch?v=',
						'embed/',
					)
					video.src = embedLink
				}
			}
			//data.drinks[0].
		})
}

const btn = document
	.querySelector('button')
	.addEventListener('click', () => getCocktails())

const inputEnter = document
	.querySelector('input')
	.addEventListener('keypress', (e) => e.key === 'Enter' && getCocktails())

// ! MAKE A CAROUSEL

// ! PLAY AROUND WITH THE DATABASE

// ! BUILD 3 APPS
