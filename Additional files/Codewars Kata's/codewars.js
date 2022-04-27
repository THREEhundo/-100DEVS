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

/****************************/
/*** Get the Middle Character			4/13
/***************************/

/***
 * You are going to be given a word.
 * Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character.
 * If the word's length is even, return the middle 2 characters.
 */

const getMiddle = (s) => {
	// split string
	let charArr = s.split('')
	// get length
	let length = charArr.length
	console.log(charArr, length, length % 2)
	// even -> return middle 2 chars
	if (length % 2 === 0) {
		let middleEnd = length / 2 + 1
		let middleStart = length / 2 - 1
		let middle = charArr.slice(middleStart, middleEnd)
		return middle.join('')
	}
	// odd -> return middle char
	if (length % 2 !== 0) {
		let middle = Math.floor(length / 2)
		console.log(charArr[middle])
		return charArr[middle]
	}
}
// BEST PRACTICE
function getMiddleBestPractice(s) {
	var middle = s.length / 2
	return s.length % 2
		? s.charAt(Math.floor(middle))
		: s.slice(middle - 1, middle + 1)
}

/****************************/
/*** Multiples of 3 or 5			4/14
/***************************/

/***
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
***/
function solution(number) {
	if (number < 0) return 0
	let sum = 0
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) sum += i
	}
	return sum
}
// !BEST PRACTICE

const bestPracticeSolution = (number) => {
	let sum = 0
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) sum += i
	}
	return sum
}
