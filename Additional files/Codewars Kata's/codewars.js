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
