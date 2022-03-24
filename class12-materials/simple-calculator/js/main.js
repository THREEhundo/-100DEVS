let total = 0;
if (total === 0)
	document.querySelector('#currentNumber').innerHTML = `${total}`;
if (total !== 0 || total < 0)
	document.querySelector('#currentNumber').innerHTML = `${total}<sup>2</sup>`;

document.querySelector('#pumpkin').addEventListener('click', makeZero);
document.querySelector('#dominosPizza').addEventListener('click', jumanji);
document.querySelector('#zebra').addEventListener('click', add9);
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2);

function showExponent() {
	if (total <= 0)
		document.querySelector('#currentNumber').innerHTML = `${total}`;
	if (total >= 1)
		document.querySelector('#currentNumber').innerHTML = `${total}<sup>2</sup>`;
}

function makeZero() {
	total = 0;
	document.querySelector('#placeToPutResult').innerText = total;
	showExponent();
}

function jumanji() {
	total = total + 3;
	document.querySelector('#placeToPutResult').innerText = total;
	showExponent();
}

function add9() {
	total = total + 9;
	document.querySelector('#placeToPutResult').innerHTML = total;
	showExponent();
}

function sub2() {
	total = total - 2;
	document.querySelector('#placeToPutResult').innerHTML = total;
	showExponent();
}

function square() {
	total = Math.pow(total, 2);
	document.querySelector('#placeToPutResult').innerHTML = total;
	showExponent();
}
