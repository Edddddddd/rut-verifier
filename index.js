const multipliers = [2, 3, 4, 5, 6, 7, 2, 3]

const verify = async (rut) => {
  // trim and remove dots and dashes
  rut = rut.toString()
    .trim()
  rut = rut.toLowerCase()
  rut = rut.replace('.', '')
  rut = rut.replace('-', '')

  // check if rut only contains numbers
  if (!rut.match(/^[0-9]+([0-9]|k|K)$/)) {
    throw new Error('Input contains invalid characters')
  }
  if (rut.length !== 9 && rut.length !== 8) {
    throw new Error('Invalid RUT length')
  } else {
    try {
      return await getDigit(rut.slice(0, -1)) === rut[rut.length - 1]
    } catch (e) {
      throw e
    }
  }
}

const getDigit = async (incompleteRut) => {
  incompleteRut = incompleteRut.toString()
    .trim()
  incompleteRut = incompleteRut.replace('.', '')
  incompleteRut = incompleteRut.replace('-', '')
  // check if incompleteRut only contains numbers
  if (!incompleteRut.match(/^[0-9]+$/)) {
    throw new Error('Input contains invalid characters')
  }
  if (incompleteRut.length !== 8 && incompleteRut.length !== 7) {
    throw new Error('Invalid RUT length')
  } else {
    var sum = 0
    var revRut = incompleteRut.split('')
      .reverse()
      .join('')
    for (var i = 0; i < incompleteRut.length; i++) {
      sum = sum + (parseInt(revRut[i]) * multipliers[i])
    }
    var value = 11 - (sum % 11)
    if (value > 0 && value <= 9) {
      value = value.toString()
      return value
    } else if (value === 10) {
      return 'k'
    } else if (value === 11) {
      return '0'
    }
  }
}



module.exports={
  verify, getDigit
}
