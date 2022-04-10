//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
	.then((res) => res.json())
	.then((data) => console.log(data.drinks[0]))

// ! GET COCKTAILS
const getCocktails = () => {
	const userInput = document.querySelector('input').value
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
		.then((res) => res.json())
		.then((data) => console.log(data.drinks[0]))
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
