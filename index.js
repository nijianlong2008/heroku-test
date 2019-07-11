const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World444422!'))

const port = process.env.PORT || 3000

module.exports = app;