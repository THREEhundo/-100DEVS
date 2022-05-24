const clickMe = document.querySelector('#clickMe')
const personName = document.querySelector('#personName').textContent
const personStatus = document.querySelector('#personStatus').textContent
const personOccupation = document.querySelector('#personOccupation').textContent

clickMe.addEventListener('click', makeReq)

async function makeReq() {
	const userName = document.querySelector('#userName').value
	const res = await fetch(`/api?student=${userName}`)
	const data = await res.json()

	console.log(data)
	personName = data.name
	personStatus = data.status
	personOccupation = data.currentOccupation
}
