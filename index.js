const port = process.env.PORT || 4000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const router = require('./config/router')
const path = require('path')

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(logger)
app.use('/api', router) 


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
//any get request come deploy, use index.html at bundle dist folder

app.listen(port, () => console.log(`node server running on :${port}`))