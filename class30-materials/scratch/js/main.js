const TicTacToe = {
	player1: 'Player 1',
	player2: 'Player 2',
	boardX: [],
	boardY: [],
	turn: true,
	winConditions: [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	],

	determineMark(e) {
		if (e.target.innerHTML !== '') return

		this.turn === true
			? this.boardX.push(Number(e.target.dataset.square))
			: this.boardY.push(Number(e.target.dataset.square))
		this.turn === true ? (e.target.innerHTML = 'X') : (e.target.innerHTML = 'O')
		let playerBoard
		this.turn === true
			? (playerBoard = this.boardX)
			: (playerBoard = this.boardY)
		this.determineWin(playerBoard)
	},

	addEventToSquares() {
		document.querySelectorAll('.square').forEach((item) =>
			item.addEventListener('click', (e) => {
				TicTacToe.determineMark(e)
				this.turn = !this.turn
			}),
		)
	},

	determineWin(board) {
		let check
		const isSubset = (array1, array2) =>
			array2.every((element) => array1.includes(element))
		this.winConditions.forEach((subArray) => {
			check = isSubset(board, subArray)
			if (check) {
				this.turn ? (player = this.player1) : this.player2
				document.querySelector('h1').innerHTML = `You win ${player}`
			}
		})
	},
}

TicTacToe.addEventToSquares()
