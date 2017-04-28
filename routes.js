const path = require('path')

module.exports = {
  home,
  foo,
  add,
  answer,
  sum
}

function home (req, res) {
  // res.send('<h1>Oh, this is cool!</h1>')
  res.sendFile(path.join(__dirname, 'public/home.html'))
}

function foo (req, res) {
  // query string format: (after the ?)
  // http://localhost:3000/foo?name=Don&age=47
  const name = req.query.name
  res.send(name + ", it's all about the foo")
  // res.sendFile(path.join(__dirname, 'public/foo.html'))
}

function add (req, res) {
  const op1 = Number(req.params.op1)
  const op2 = Number(req.params.op2)
  const sum = op1 + op2
  req.app.locals.op1 = op1
  req.app.locals.op2 = op2
  res.send('Got it. Go <a href="/answer">here</a> for the answer.')
  // res.send(`The result of ${op1} + ${op2} is ${sum}`)
}

function sum (req, res) {
  const op1 = Number(req.query.op1)
  const op2 = Number(req.query.op2)
  const sum = op1 + op2
  res.send(`${sum}`)
}

function answer (req, res) {
  const sum = req.app.locals.op1 + req.app.locals.op2
  res.send(`I hope you were expecting ${sum}`)
}
