//Create a mouse object that has four properties and three methods

const mickey = {}

mickey.color = 'black and white'
mickey.company = 'Disney'
mickey.hasTail = true
mickey.hasHands = true
mickey.wife = () => 'Minnie Mouse'
mickey.friend = () => 'Goofey'
mickey.home = (state) =>
	state === 'california'
		? 'Disney Land'
		: state === 'florida'
		? 'Disney World'
		: 'not his home'

function MakeMouse(color, company, tail, hands) {
	this.color, this.company, this.tail, this.hands
}

const mickeyMouse = new MakeMouse('black and white', 'Disney', true, true)
console.log(mickeyMouse)
