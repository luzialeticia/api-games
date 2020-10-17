const express = require('express')
const app = express()
const games = require('./routes/gamesRoutes')

app.use(express.json())
app.use('/', games)

module.exports = app