const yellBtn = document.querySelector('#yell');
yellBtn.addEventListener('click', run);

const synth = window.speechSynthesis;

function run() {
	console.log(`working order`);
	const fName = document.querySelector('#firstName').value;
	const fMidName = document.querySelector('#firstMiddle').value;
	const lMidName = document.querySelector('#lastMiddle').value;
	const lName = document.querySelector('#lastName').value;
	const yellingHeader = document.querySelector('#placeToYell');

	const allCaps =
		(yellingHeader.innerText = `${fName} ${fMidName} ${lMidName} ${lName} `);

	let yellThis = new SpeechSynthesisUtterance(allCaps);
	synth.speak(yellThis);
}
