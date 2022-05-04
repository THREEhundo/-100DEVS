//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
	constructor(name) {
		this.name = name
	}
	speak() {
		console.log(`${this.name} makes a sound`)
	}
}

class Cat extends Animal {
	constructor(genius) {
		super(Animal)
		this.genius = genius
	}
	types() {
		console.log(`there are thousands of types of cats`)
	}
}

class Tiger extends Cat {
	constructor(colors) {
		super(Cat)
		this.colors = colors
	}
	stalk() {
		console.log(`Slowly walks among the fern`)
	}
}
