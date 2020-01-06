const port = process.env.PORT || 4000
const express = require('express')
const app = express()
const logger = require('./lib/logger')
const router = require('./config/router')

app.use(logger)

app.use('/api', router)

app.listen(port, () => console.log(`node server running on :${port}`))