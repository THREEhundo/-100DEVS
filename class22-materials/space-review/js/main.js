//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5]
let add = arr.reduce((total, num) => (total += num), 0)
console.log(add)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const takeArr = (arr) => arr.map((num) => num * num)
takeArr(arr)
//Create a function that takes string
//Print the reverse of that string to the console
const takeStr = (str) => str.split('').reverse().join('')
console.log(takeStr('sammy'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
