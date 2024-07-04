const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const srcPath = path.join(__dirname, '..')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(expressLayouts)

app.use(express.static(path.join(srcPath, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

const stopServer = () => {
  server.close()
}

module.exports = { app, stopServer }
