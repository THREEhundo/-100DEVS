//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Character(name, colors, specialMove, country, specialMoveBtnCombo) {
	this.name,
		this.colors,
		this.country,
		this.specialMove,
		(this.specialMoveBtnCombo = () => console.log(specialMoveBtnCombo))
}

const ryu = new Character(
	'ryu',
	'white & red',
	'haduken',
	'japan',
	'down + up + light punch',
)
