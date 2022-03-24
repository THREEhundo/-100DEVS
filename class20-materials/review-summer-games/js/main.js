//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
const arrFunc = (arr) => {
	let multi = 1
	arr.forEach((item) => (multi *= item))
	alert(multi)
}
arrFunc([1, 2, 3])
arrFunc([20, 40, 60])
