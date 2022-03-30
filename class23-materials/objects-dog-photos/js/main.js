//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch('https://dog.ceo/api/breeds/shiba-inu')
	.then((resp) => resp.json())
	.then((data) => {
		console.log(data)
		document.querySelector('img').src = data.message
	})
	.catch((err) => console.log(err))
