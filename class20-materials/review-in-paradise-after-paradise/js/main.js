// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
const arr2 = (arr) => {
	if (arr[0] < arr[arr.length - 1]) alert('hi')
	if (arr[arr.length - 1] > arr[0]) alert('bye')
	if (arr[0] === arr[arr.length - 1]) alert('we close in an hour')
}
arr2(2, 2)
arr2(1, 2)
arr2(4, 2)
