const multipliers = [2, 3, 4, 5, 6, 7, 2, 3]

exports.verify = function (rut, cb) {
// trim and remove dots and dashes
  rut = rut.toString().trim()
  rut = rut.toLowerCase()
  rut = rut.replace('.', '')
  rut = rut.replace('-', '')

// check if rut only contains numbers
  if (!rut.match(/^[0-9]+([0-9]|k|K)$/)) {
    return cb('Input contains invalid characters', null)
  }

  if (rut.length !== 9 && rut.length !== 8) {
    return cb('Invalid RUT length', null)
  } else {
    getDigit(rut.slice(0,-1), function(err, digit){
      if (digit === rut[rut.length-1]) {
        return cb(null, true)
      } else {
        return cb(null, false)
      }

    })
  }
}

var getDigit = function (incompleteRut, cb){
  incompleteRut = incompleteRut.toString().trim()
  incompleteRut = incompleteRut.replace('.', '')
  incompleteRut = incompleteRut.replace('-', '')
  // check if incompleteRut only contains numbers
  if (!incompleteRut.match(/^[0-9]+$/)) {
    return cb('Input contains invalid characters', null)
  }
  if (incompleteRut.length !== 8 && incompleteRut.length !== 7) {
    return cb('Invalid RUT length', null)
  } else {
    var sum = 0
    var revRut = incompleteRut.split('').reverse().join('')
    for (var i = 0; i < incompleteRut.length; i++) {
      sum = sum + (parseInt(revRut[i]) * multipliers[i])
    }
    var value = 11 - (sum % 11)
    if (value > 0 && value <= 9) {
      value = value.toString()
      return cb(null, value)
    } else if (value === 10) {
      return cb(null, 'k')
    } else if (value === 11) {
      return cb(null, '0')
    }
  }
}

exports.getDigit = getDigit;
