//Create a pizza object that has four properties and three methods

// literal syntax

let pizza = {}

pizza.toppings = ['pepperoni', 'jalepenos', 'sausage', 'olives']
pizza.size = 'large'
pizza.crust = 'pan'
pizza.sauce = 'regular'

pizza.estimatedDeliveryTime = function () {
	return console.log('35 minutes')
}

pizza.toss = function () {
	pizza.toppings.forEach((topping, index) => {
		let tossTurn = index + 1
		console.log(`${tossTurn} toss`)
	})
}
