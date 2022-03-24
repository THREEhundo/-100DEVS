//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tv = ['naruto', 'one piece', 'one punch man']
tv.forEach((show) => console.log(show))
//Create and array of numbers
let nums = [111, 222, 333, 444, 6, 777777, 3, 2, 555]
//Return a new array of numbers that includes every even number from the previous Arrays
let newNums = nums.filter((num) => num % 2 === 0)
console.log(newNums)
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const takeTheArrays = (arr) => {
	let sorted = arr.sort((a, b) => a - b)
	console.log(sorted[1], sorted[-2])
}
takeTheArrays(nums)
