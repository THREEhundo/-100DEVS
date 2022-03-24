const dayInput = document.querySelector('#day');
const checkBtn = document.querySelector('#check');
const placeToSee = document.querySelector('#placeToSee');

checkBtn.addEventListener('click', serveMessage);

function serveMessage() {
	if (
		'sunday'.localeCompare(dayInput.value) === 0 ||
		'saturday'.localeCompare(dayInput.value) === 0 ||
		'friday'.localeCompare(dayInput.value) === 0
	) {
		placeToSee.innerText = ``;
		placeToSee.innerText = `${dayInput.value}`;
		getGif(dayInput.value, randomNum(25));
	}
	if (
		'tuesday'.localeCompare(dayInput.value) === 0 ||
		'thursday'.localeCompare(dayInput.value) === 0
	) {
		placeToSee.innerText = ``;
		placeToSee.innerText = `Class is in Session ${dayInput.value}`;
		getGif('dancing', randomNum(25));
	} else {
		placeToSee.innerText = ``;
		placeToSee.innerText = `zZz ${dayInput.value}`;
		getGif(dayInput.value, randomNum(25));
	}
	dayInput.value = '';
}

async function getGif(searchParam, randomNum) {
	let url = `http://api.giphy.com/v1/gifs/search?q=${searchParam}&api_key=duw6aNX5Bp725TVBruHw6X9q1pV4bij5&limit=25&offset=${randomNum}&lang=en`;

	let response = await fetch(url);
	let gif = await response.json();

	let activeGif = document.querySelector('#gif');
	if (activeGif) document.body.removeChild(activeGif);

	let img = document.createElement('img');
	img.src = gif.data[randomNum].images.original.webp;
	img.id = 'gif';
	document.body.appendChild(img);
}

function randomNum(num) {
	return Math.floor(Math.random() * num);
}
