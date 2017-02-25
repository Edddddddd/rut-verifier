const multipliers = [2, 3, 4, 5, 6, 7, 2, 3]

exports.verify = function (rut, cb) {
// trim and remove dots and dashes
  rut.trim()
  rut.replace('.', '')
  rut.replace('-', '')

// check if rut only contains numbers
  if (!rut.match(/^[0-9]+([0-9]|k|K)$/)) {
    return cb(null, 'Input contains invalid characters')
  }

  if (rut.length !== 9 && rut.length !== 8) {
    return cb(null, 'Invalid RUT length')
  } else {
    var sum = 0
    var revRut = rut.split('').reverse().join('')
    for (var i = 1; i < rut.length; i++) {
      sum = sum + (parseInt(revRut[i]) * multipliers[i - 1])
    }

    var value = 11 - (sum % 11)

    if (value > 0 && value <= 9) {
      if (value.toString() === revRut[0]) {
        return cb(true, null)
      } else {
        return cb(false, null)
      }
    } else if (value === 10) {
      if (revRut[0] === 'K' || revRut[0] === 'k') {
        return cb(true, null)
      } else {
        return cb(false, null)
      }
    } else if (value === 11) {
      if (revRut[0] === '0') {
        return cb(true, null)
      } else {
        return cb(false, null)
      }
    }
  }
}
