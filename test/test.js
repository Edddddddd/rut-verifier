var rut = require('../index.js')
// var should = require('chai').should()
var expect = require('chai').expect
describe('RUT verifier', function () {
  it('invalid string returns error', function () {
    rut.verify('sdfwer', function (data, err) {
      expect(data).to.be.null
      expect(err).to.equal('Input contains invalid characters')
    })
  })

  it('invalid character at beginning returns error', function () {
    rut.verify('a93847362', function (data, err) {
      expect(data).to.be.null
      expect(err).to.equal('Input contains invalid characters')
    })
  })

  it('invalid character at ending returns error', function () {
    rut.verify('93847362a ', function (data, err) {
      expect(data).to.be.null
      expect(err).to.equal('Input contains invalid characters')
    })
  })

  it('invalid character at any position returns error', function () {
    rut.verify('9384a7362 ', function (data, err) {
      expect(data).to.be.null
      expect(err).to.equal('Input contains invalid characters')
    })
  })

  it('10 characters RUT number is valid', function () {
    rut.verify('147837488', function (data, err) {
      expect(err).to.be.null
      expect(data).to.be.true
    })
  })

  it('10 characters RUT number is invalid', function () {
    rut.verify('147837483', function (data, err) {
      expect(err).to.be.null
      expect(data).to.be.false
    })
  })

  it('10 characters RUT number with letter k is valid', function () {
    rut.verify('14853568k', function (data, err) {
      expect(err).to.be.null
      expect(data).to.be.true
    })
  })

  it('10 characters RUT number with letter k number is invalid', function () {
    rut.verify('14853567k', function (data, err) {
      expect(err).to.be.null
      expect(data).to.be.false
    })
  })

  it('9 characters RUT number is valid', function () {
    rut.verify('98465340', function (data, err) {
      expect(err).to.be.null
      expect(data).to.be.true
    })
  })

  it('9 characters RUT number is invalid', function () {
    rut.verify('98465341', function (data, err) {
      expect(err).to.be.null
      expect(data).to.be.false
    })
  })

  it('9 characters RUT with letter k number is valid', function () {
    rut.verify('4853578k', function (data, err) {
      expect(err).to.be.null
      expect(data).to.be.true
    })
  })

  it('9 characters RUT number with letter k is invalid', function () {
    rut.verify('4853579k', function (data, err) {
      expect(err).to.be.null
      expect(data).to.be.false
    })
  })
})
