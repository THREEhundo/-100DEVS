//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

const myPokemon = ['pikachu', 'bulbasaur', 'squirtle', 'charmander']
const reversePokemon = (arr) =>
	arr.reverse().forEach((pokemon) => console.log(pokemon))

reversePokemon(myPokemon)
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

const compareArrs = (a, b) => {
	const sumOfSquares = a.reduce((acc, curr) => (acc += Math.pow(curr, 2)), 0)
	const sumOfCubes = b.reduce((acc, curr) => (acc += Math.pow(curr, 3)), 0)

	return sumOfSquares > sumOfCubes ? true : false
}

const multipleOfIndex = (arr) => arr.map((item, index) => item * index)
const indexMultiplier = multipleOfIndex([22, -6, 32, 82, 9, 25])
console.log(indexMultiplier)

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

const toNum = (arr) => arr.reduce((acc, curr) => (acc += Number(curr)), 0)
const stringNums = toNum(['1', 2, '3', 4, '5'])
console.log(stringNums)
