const port = process.env.PORT || 4000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const router = require('./config/router')

app.use(logger)

app.use('/api', router) 
//use proxy for api requests

app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
//any get request come deploy, use index.html at bundle dist folder

app.listen(port, () => console.log(`node server running on :${port}`))