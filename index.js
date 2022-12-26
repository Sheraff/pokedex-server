// @ts-check

const express = require('express')
const { readFileSync } = require('node:fs')
const { writeFile } = require('node:fs/promises')
const { join } = require('node:path')

const port = 8080

const app = express()
const str = readFileSync(join(__dirname, 'all.json'), 'utf8')
const data = JSON.parse(str)

void async function() {
	// data.forEach(item => item.ThumbnailImage = `/pokedex-server/images/${item.id}.png`)
	// writeFile(join(__dirname, 'all.json'), JSON.stringify(data, null, 2), 'utf8')
	// for (const item of data) {
	// 	await writeFile(join(__dirname, 'pokemon', `${item.id}.json`), JSON.stringify(item, null, 2), 'utf8')
	// }
	// const list = Array.from(new Set(data.map(item => item.id)))
	// await writeFile(join(__dirname, 'list.json'), JSON.stringify(list, null, 2), 'utf8')
	// const types = Array.from(new Set(data.flatMap(item => item.type)))
	// await writeFile(join(__dirname, 'types.json'), JSON.stringify(types, null, 2), 'utf8')
}()


// app.get('/api', (req, res) => {
// 	res.send(`
// 		<h1>Pokedex API</h1>
// 		<table>
// 			<tr>
// 				<td><a href="/api/list">List of pokemon</a></td>
// 				<td><code>/api/list</code></td>
// 			</tr>
// 			<tr>
// 				<td><a href="/api/pokemon/1">Pokemon by id</a></td>
// 				<td><code>/api/pokemon/:id</code></td>
// 			</tr>
// 			<tr>
// 				<td><a href="/pokedex-server/images/1.png">Pokemon image by id</a></td>
// 				<td><code>/pokedex-server/images/:id.png</code></td>
// 			</tr>
// 		</table>
// 	`)
// })

// app.get('/api/list', (req, res) => {
// 	res.send(data.map((item) => item.id))
// })

// app.get('/api/pokemon/:id', (req, res) => {
// 	const { id } = req.params
// 	const pokemon = data.find((item) => item.id === Number(id))
// 	res.send(pokemon)
// })

// app.use('/api/images', express.static(join(__dirname, 'images')))

// app.listen(port, () => {
// 	console.log(`Pokedex api listening on port ${port}`)
// })