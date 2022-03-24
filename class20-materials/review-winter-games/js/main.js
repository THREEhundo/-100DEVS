//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const arrFunc = (arr) => {
	let copy = []

	for (let item in arr) {
		if (arr[item] % 2 === 0) copy.push(arr[item])
	}
	return console.log(copy)
}

arrFunc([2, 4, 5])
