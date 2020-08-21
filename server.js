const express = require('express')
const app = express()
const dbConnection = require('./db/connection')
const apiRouter = require('./routes/apiRouter')

app.use(express.json())
app.use('/plantsubscriptionservice/v1', apiRouter)


module.exports = app
