// *Variables*
// Create a variable and console log the value
const sam = "Sam"
console.log(sam)
// Create a variable, add 10 to it, and alert the value
const alertPlus10 = () => {
	let num = 718
	num = num + 10
	return alert(num)
}
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const sub4 = (one, two, three, four) => alert(one - two - three - four)
// Create a function that divides one number by another and returns the remainder
const divide = (numerator, denominator) => denominator % numerator
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const jumanji = (one, two) => (one + two > 50 ? alert("JUMANJI") : "")
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const multiply3x = (one, two, three) =>
	(one * two * three) % 3 === 0 ? alert("ZEBRA") : ""
