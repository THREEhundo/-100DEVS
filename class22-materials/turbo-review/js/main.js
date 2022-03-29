// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = 'soda water'
drink = drink.trim()
console.log(drink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let drinks = 'water and soda water apple'
drinks = drinks.trim()

const findWord = drinks.search('phone')
const yesOrNo = () => (findWord === -1 ? 'no' : 'yes')
console.log(yesOrNo())
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rockPaperScissors = () =>
	Math.random() <= 0.33
		? 'rock'
		: Math.random() <= 0.66 && Math.random() > 0.33
		? 'paper'
		: 'scissors'
console.log(rockPaperScissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const playGame = (str) => {
	let botChoice = rockPaperScissors()
	if (
		(str === 'rock' && botChoice === 'paper') ||
		(str === 'paper' && botChoice === 'scissors') ||
		(str === 'scissors' && botChoice === 'rock')
	) {
		console.log('you lose')
	} else if (
		(str === 'rock' && botChoice === 'scissors') ||
		(str === 'paper' && botChoice === 'rock') ||
		(str === 'scissors' && botChoice === 'paper')
	) {
		console.log('you win')
	} else {
		console.log('tie')
	}
}
playGame('rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const arrSpitter = (arr) => {
	arr.forEach((x) => playGame(x))
}
