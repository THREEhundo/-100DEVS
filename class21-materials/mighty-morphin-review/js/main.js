// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday
holiday = 'CHRISTMAS'
console.log(holiday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'sammy'.toUpperCase()
let slicedBehind = str.slice(-3)
console.log(slicedBehind)

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const nums = (n1, n2, n3, n4, n5) =>
	console.log(Math.abs(100 - n1 - n2 - n3 - n4 - n5))
nums(1, 44, 55, 22, 11)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const triple = (n1, n2, n3) => {
	if ((n1 > n2 && n1 > n3) || (n1 < n2 && n1 < n3)) {
		console.log(n1)
	}
	if ((n2 > n1 && n2 > n3) || (n2 < n1 && n2 < n3)) {
		console.log(n2)
	}
	if ((n3 > n2 && n3 > n1) || (n3 < n2 && n3 < n1)) {
		console.log(n3)
	}
}
const tripleMath = (n1, n2, n3) => {
	let min = Math.min(n1, n2, n3)
	let max = Math.max(n1, n2, n3)
	return console.log(`$Lowest number is {min}, Highest number is ${max}`)
}
triple(1, 2, 3)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const coinFlip = () => (Math.random() < 0.5 ? 'heads' : 'tails')
coinFlip()
//*Loops* s
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

const multiCoinFlip = (n) => {
	for (let i = 1; i <= n; i++) {
		let result = Math.random()
		result < 0.5 ? console.log('heads') : console.log('tails')
	}
}
multiCoinFlip(5)
