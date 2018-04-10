const errExt = require('../lib')
const assert = require('assert')

describe('index.test.js', () => {
  it('should errExt be a function', () => {
    assert.equal(typeof errExt, 'function')
  })

  it('should return an array of length 2', () => {
    const ext = errExt('404__Page Not Found')
    assert.equal(ext.length, 2)
  })

  it('should return correct data when valid string passed', () => {
    let status, message;
    [status, message] = errExt('400__Could not understand the request')
    assert.ok(status)
    assert.ok(message)
    assert.equal(typeof status, 'number')
    assert.equal(typeof message, 'string')
    assert.equal(status, 400)
    assert.equal(message, 'Could not understand the request')
  })

  it('should not extract underscore within the error message', () => {
    let status, message;
    [status, message] = errExt('403__refresh_token is not provided')
    assert.ok(status)
    assert.ok(message)
    assert.equal(typeof status, 'number')
    assert.equal(typeof message, 'string')
    assert.equal(status, 403)
    assert.equal(message, 'refresh_token is not provided')
  })

  it('should throw error if error status did not provide', () => {
    assert.throws(() => errExt('Throw an arror if wrong string pass'))
  })

  it('should throw error if error message did not provided', () => {
    assert.throws(() => errExt('401__'))
  })

  it('should throw error if error status is missing', () => {
    assert.throws(() => errExt('__Some error without status'))
  })

  it('should throw error if only double underscore is provided as message', () => {
    assert.throws(() => errExt('__'))
  })

  it('should throw error if only singe underscore is provide', () => {
    assert.throws(() => errExt('404_Something not found'))
  })

})
