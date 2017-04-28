const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.static('public'))

app.get('/', routes.home)
app.get('/foo', routes.foo)
app.get('/add/:op1/:op2', routes.add)
app.get('/answer', routes.answer)
app.get('/sum', routes.sum)

module.exports = app

