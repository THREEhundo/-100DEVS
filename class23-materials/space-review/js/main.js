//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let reduced = arr.reduce((total, item) => total + item, 0)
let reduced2 = console.log(reduced)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let arr2 = [2, 4, 6, 8, 10]
const oG = (arr) => arr.forEach((item) => item ** 2)
const oG1 = oG(arr2)
//console.log(oG1)

//Create a function that takes string
//Print the reverse of that string to the console
let string = 'sammy'
const stringer = (str) => str.split('').reverse().join('')
console.log(stringer(string))
//Create a function that takes in a string
//Alert if the string is a palindrome or not

const stringer2 = (str) => alert(str.split('').reverse().join('') === str)
//console.log(stringer2('racecar'))
