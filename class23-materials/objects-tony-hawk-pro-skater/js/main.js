//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProSkater(name, board, helmet, sneakers) {
	this.name
	this.board
	this.helmet
	this.sneakers
	this.move1 = () => '900'
	this.move2 = () => 'kickflip'
	this.move3 = () => 'ollie'
}

let tonyHawk = new TonyHawkProSkater('Tony Hawk', 'Bird', true, 'DC')
console.log(tonyHawk)
