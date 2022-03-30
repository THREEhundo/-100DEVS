// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let sentence = 'yo whats happening son?'
//alert(sentence.endsWith('?'))
let dev = 'jr. dev'
let whoWeAre = dev.replace('jr. dev', 'software engineer')

//console.log(whoWeAre)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
	const random = Math.random()

	random < 0.33 ? 'scissors' : random > 0.33 && random < 0.66 ? 'rock' : 'paper'
}
//rockPaperScissors()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function choice(str) {
	let comp = rockPaperScissors()
	if (
		(str === 'rock' && comp === 'rock') ||
		(str === 'scissors' && comp === 'scissors') ||
		(str === 'paper' && comp === 'paper')
	) {
		console.log('tie')
	} else if (
		(str === 'rock' && comp === 'scissors') ||
		(str === 'paper' && comp === 'rock') ||
		(str === 'scissors' && comp === 'paper')
	) {
		console.log('winner')
	} else {
		console.log('loser')
	}
}
choice('scissors')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
