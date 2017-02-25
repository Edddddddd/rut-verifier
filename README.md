# rut-verifier

## Synopsis
This module will help you verify chilean RUTs (Rol Único Tributario).

## Code Example

Sample usage:
```
var rut = require('rut-verifier')

rut.verify('198765430', function (isValid, err) {
  if (err) {
    return console.error(err)
  }
  if (isValid) {
    console.log('VALID RUT')
  } else {
    console.log('INVALID RUT')
  }
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
