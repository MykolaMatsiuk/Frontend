var calc = require('../index.js');
var assert = require('assert');

describe('calculator', () => {
  it('should add two numbers', done => {
    let total = calc.add(5, 2);
    assert.equal(total, 7);
    done();
  }),
  it('should substract two numbers', done => {
    assert.equal(calc.substract(5, 2), 3);
    done();
  }),
  it('should divide two numbers', done => {
    assert.equal(calc.divide(5, 2), 2.5);
    done();
  }),
  it('can not divide on zero', done => {
    assert.equal(calc.divide(5, 0), "You can not divide on zero");
    done();
  }),
  it('should multiply two numbers', done => {
    assert.equal(calc.multiply(5, 2), 10);
    done();
  })
})
