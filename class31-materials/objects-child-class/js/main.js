//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
	constructor(name) {
		this._name = name
	}
	get name() {
		return this._name
	}
	speak() {
		console.log(`${this.name} makes a sound`)
	}
}

class Cat extends Animal {
	constructor(name, genius) {
		super(name)
		this._genius = genius
	}

	get genius() {
		return this._genius
	}
	types() {
		console.log(`there are thousands of types of cats`)
	}

	speak() {
		super.speak()
		console.log(`${this.name} barks`)
	}
}

class Tiger extends Cat {
	constructor(colors) {
		super(genius)
		this.colors = colors
	}

	types() {
		super.types()
		console.log(`woot woot`)
	}
	stalk() {
		console.log(`Slowly walks among the fern`)
	}
}
