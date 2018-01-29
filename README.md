# rut-verifier

[![Greenkeeper badge](https://badges.greenkeeper.io/flakolefluk/rut-verifier.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/rut-verifier.svg)](https://badge.fury.io/js/rut-verifier) [![Build Status](https://travis-ci.org/flakolefluk/rut-verifier.svg?branch=master)](https://travis-ci.org/flakolefluk/rut-verifier)

## Synopsis
This module will help you verify chilean RUTs (Rol Único Tributario).

## Breaking Changes in 3.0.0
-Now using promises instead of callbacks

## Breaking Changes in 2.0.0
-Function callback is now in a standard format (error first callback).

## Code Example

Sample usage:
```
V3+
var rutVerifier = require('rut-verifier')

rutVerifier.verify('198765430')
  .then(isValid=>console.log(isValid?'VALID RUT':'INVALID RUT')
  .catch(console.error)


rutVerifier.getDigit(19876543)
.then(digit=>console.log(digit)) //0
.catch(console.error)




V2
var rutVerifier = require('rut-verifier')

rutVerifier.verify('198765430', function (err, isValid) {
  if (err) {
    return console.error(err)
  }
  if (isValid) {
    console.log('VALID RUT')
  } else {
    console.log('INVALID RUT')
  }
})

rutVerifier.getDigit(19876543, function(err, digit){
  if(err){
    return console.error(err)
  }
  console.log(digit) //0
})
```

## Installation

Install the dependency
```
npm install rut-verifier --save
```

## Tests

Mocha and Chai are used for testing. To run the tests:
```
npm test
```

## Connect with the author

Email me to flakolefluk@gmail.com

## Contributors

If you want to contribute, open a new issue or fork the repository and add a pull request

## License

Read LICENSE.md
