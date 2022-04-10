//Create a constructor with 4 properties and 3 methods
function PizzaMaker(toppings, style, cheese, sauce, company) {
	this.toppings = toppings
	this.style = style
	this.cheese = cheese
	this.sauce = sauce
	this.company = company
	this.spitCompany = function () {
		return console.log(`Brought to you by ${this.company}`)
	}
	this.bakeTime = function () {
		return console.log('30 minutes')
	}
	this.eatNow = function () {
		return console.log(`hell yeah`)
	}
}

let myPizza = new PizzaMaker(
	['pepperoni', 'olives'],
	'New York',
	'Mozzerella',
	'Red',
	'Lucali"s',
)

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
	.then((res) => res.json())
	.then((data) => console.log(data.drinks[0]))
