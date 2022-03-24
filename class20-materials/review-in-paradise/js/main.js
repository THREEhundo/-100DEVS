// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood
favFood = 'New York Pizza'
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'yerrrr'
alert(str.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

const quickMaffs = (n1, n2, n3) => alert((n2 / n1) * n3)
quickMaffs(1, 2, 3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

const numero = (n1) => console.log(Math.cbrt(n1))
numero(100)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const months = (month) => {
	let summer = ['june', 'july', 'august']

	month === 'june' || month === 'july' || month === 'august'
		? alert('YAY')
		: alert('boo')
}
months('june')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const looper = (num) => {
	for (let i = 1; i <= num; i++) {
		if (!i % 5 === 0) console.log(i)
	}
}

looper(100)
