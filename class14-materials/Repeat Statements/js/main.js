const carousel = document.querySelector("ul");
const carouselItems = document.querySelectorAll(".carousel-item");
const userNum = document.querySelector(".userNum");

const guessTheNumberForm = document.querySelector(".guess-the-number");
const guessTheNumSubmitBtn = document.querySelector("#guess-the-num-submit");
guessTheNumSubmitBtn.addEventListener("click", (e) => guessTheNumber(e));
const guessTheNumber = (e) => {
	e.preventDefault();
	const guessTheNumInput = document.querySelector("#guess-input");
	while (guessTheNumInput.value > 100) {
		alert("Enter a number from 1 to 100");
		break;
	}
	guessTheNumInput.value = "";
	const goodJob = document.querySelector("#good-job");
	goodJob.innerText = "You followed direction! Good Job!";
};
const autoSlideCarousel = (e) => {
	e.preventDefault();
	for (let i = 0; i <= carouselItems.length; i++) {
		carouselItems[i].classList.add("active");
		setTimeout(() => {
			carouselItems[i].classList.remove("active");
		}, 2000);
		//if (carouselItems[i] === 10) carouselItems[i].style.display = "block";
	}
};

const parity = (userNum) => {
	const passedNum = userNum;
	for (let i = passedNum; i < passedNum + 10; i++) {
		if (i % 2 === 0) console.log(`${i} is even`);
		else console.log(`${i} is odd`);
	}
};

parity(10);
// MULTIPLICATION TABLE
const multiplySubmit = document.querySelector(".multiply-submit");
const multiplyInput = document.querySelector("#multiplication-num-input");
const multiplicationContainer = document.querySelector(
	".multiplication-container",
);

multiplySubmit.addEventListener("click", (e) => {
	clearPreviousResults();
	submitUserNum(e);
});

const clearPreviousResults = () => {
	const multiplicationContainer = document.querySelector(
		".multiplication-container",
	);
	while (multiplicationContainer.firstChild) {
		multiplicationContainer.removeChild(multiplicationContainer.lastChild);
	}
};

const multiplicationTable = (userInputNum) => {
	userNum.innerText = userInputNum;

	for (let i = 2; i < 10; i++) {
		const output = document.createElement("p");
		output.innerText = `${userInputNum} * ${i} = ${userInputNum * i}`;
		output.classList.add("border");
		multiplicationContainer.appendChild(output);
	}
};

const submitUserNum = (e) => {
	e.preventDefault();
	return multiplicationTable(multiplyInput.value);
};

// FIZZBUZZ
const fizzBuzz = () => {
	for (let i = 0; i < 101; i++) {
		if (i % 3 === 0) console.log("Fizz");
		if (i % 3 === 0 && !(i % 5 === 0)) console.log("Buzz");
		return console.log(i);
	}
};

fizzBuzz();

const wordInput = document.querySelector("#word-input");
const submitWordBtn = document.querySelector("#word-submit");

const hintsAndReplies = [
	"Try again!",
	"Nope!",
	`It's a lot simpler than you think!`,
	"The word itself can be a whole sentence.",
	"The word itself can be a whole statement.",
];

submitWordBtn.addEventListener("click", checkWordInput);

function checkWordInput(e) {
	e.preventDefault();
	let wrong = document.querySelector("#wrong");
	let successfulGuess = document.querySelector("#success");
	wrong.innerText = "";
	successfulGuess.innerText = "";
	let guess = wordInput.value;

	while (wordInput.value !== "no" && wordInput.value !== "yes")
		return (wrong.innerText = [...hintsAndReplies]
			.sort(() => 0.5 - Math.random())
			.slice(0, 1));

	//if (wordInput.value !== "no" && wordInput.value !== "yes")
	//	return (wrong.innerText = [...hintsAndReplies]
	//		.sort(() => 0.5 - Math.random())
	//		.slice(0, 1));

	return (successfulGuess.innerText = "🎉 Congrats! 🎉");
}
