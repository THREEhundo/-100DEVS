const contestants = document.querySelectorAll('h2');

Array.from(contestants).forEach((element) =>
	element.addEventListener('click', checkForRose),
);

function checkForRose(click) {
	if (click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden');
	} else {
		alert('Wrong!');
	}
}

//// ! input validation
//const validationInput = document.querySelector('#input100');
//while (!validationInput.value || validationInput.value > 100)
//	// ! multiplication table
//	alert('choose a number from 1 - 100');
//alert('Choose a number');
//const numInput = document.querySelector('#multiply');
//for (let i = 1; i <= 10; i++) {
//	console.log(i * numInput.value);
//}
//// ! input validation
//const randomQuestionsArr = [
//	'who are you?',
//	'where do you come from?',
//	'how old are you?',
//	'what do you dream of?',
//];
//while (validationInput.value !== 'yes' || validationInput.value !== 'no')
//	randomQuestionsArr.map((question) => alert(question));
//
//// ! fizz buzz
//
//for (let i = 1; i <= 100; i++) {
//	if (i % 3 === 0) console.log('Fizz');
//	if (i % 5 === 0 && i % 3 !== 0) console.log('Buzz');
//	if (i % 5 === 0 && i % 3 === 0) console.log('FizzBuzz');
//	console.log(i);
//}
