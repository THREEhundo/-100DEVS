import { createServer } from 'http'
import { readFile } from 'fs'

createServer((req, res) => {
	readFile('demofile.html', (err, data) => {
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.write(data)
		res.end()
	})
}).listen(8000)
