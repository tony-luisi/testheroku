const test = require('tape')
const request = require('supertest')

const app = require('./server')

test('home route get correct response', function (t) {
  request(app)
    .get('/')
    .end((err, res) => {
      t.true(res.text.includes('Home'), 'home route response with Home in it')
      t.end()
    })
})

test('sum route adds two numbers and provides correct response', function (t) {
  // arrange
  const expected = 3
  
  // act
  request(app)
    .get('/sum')
    .query({ op1: 1, op2: 2 })
    .expect(300)
    .end((err, res) => {
      if (err) {
        t.end()
        return
      }
      t.pass('http response 200 is good')
      // assert
      t.equals(Number(res.text), expected, 'sum route gives correct response')
      t.end()
    })
})