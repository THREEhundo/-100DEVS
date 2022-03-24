// TODO - HOMEWORK DUE THURSDAY
// TODO - MAKE CASE SENSITIVE
// TODO - NETWORK WITH 2 PEOPLE IN TECH
// TODO - JS VARIABLES
// TODO - JS FUNCTION BASICS

// TODO - ADD COLOR TO BACKGROUND PICKER
// TODO - ADD ANOTHER BUTTON VALUE TO CALCULATOR
// TODO - ADD CASE SENSITIVITY & ADD TO DOM
// TODO - DO MULTIPLE TIMES
// !!! DO SOMETHING NICE FOR ME !!!
document.querySelector('#check').addEventListener('click', check);
document.querySelector('#day').addEventListener('keydown', (e) => submit(e));

function submit(e) {
	console.log(document.querySelector('#day').value);
	if (e.key === 'Enter') {
		e.preventDefault();
		check();
	}
}

function check() {
	const day = document.querySelector('#day').value;

	//Conditionals go here
	if (
		'tuesday'.localeCompare(day) === 0 ||
		'thursday'.localeCompare(day) === 0
	) {
		document.querySelector('#placeToSee').innerHTML = 'Class Day';
	} else if ('monday'.localeCompare(day) === 0) {
		document.querySelector('#placeToSee').innerHTML = 'Boring Day';
	} else {
		document.querySelector('#placeToSee').innerHTML = 'Good Day';
	}
}
