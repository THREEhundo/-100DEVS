//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let cocktailName = document.querySelector('h2')
let cocktailImg = document.querySelector('img')
let coctailInstructionsHeader = document.querySelector('h3')
let cocktailInstructions = document.createElement('p')

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
