// ! Square each individual number and return the value

function squareDigits(num) {
	let string = num.toString()
	let arr = string.split('')
	let arr1 = arr
		.map((num) => {
			let number = parseInt(num)
			return Math.pow(number, 2)
		})
		.join('')
	return parseInt(arr1)
}

const square = (num) =>
	Number(
		('' + num)
			.split('')
			.map((val) => val * val)
			.join(''),
	)

/****************************/
/*** Descending Order 			4/11
/***************************/

/***
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
***/

function descendingOrder(n) {
	return Number(
		n
			.toString()
			.split('')
			.sort((a, b) => a - b)
			.reverse()
			.join(''),
	)
}
descendingOrder(123456789)

// ! Best Practice

function descendingOrderBP(n) {
	return parseInt(String(n).split('').sort().reverse().join(''))
}

/****************************/
/*** Mumbling			4/12
/***************************/

/***
 * This time no story, no theory. The examples below show you how to write function accum:
 *	Examples:
		accum("abcd") -> "A-Bb-Ccc-Dddd"
		accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
		accum("cwAt") -> "C-Ww-Aaa-Tttt"
* The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

function accum(s) {
	// take each letter of string and seperate into an array
	// return each letter the same amount as the index + 1, capitalize the first letter
}
