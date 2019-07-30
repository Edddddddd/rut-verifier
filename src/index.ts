const multipliers = [2, 3, 4, 5, 6, 7, 2, 3];

type Rut = string | number;

export const verify = async (rut: Rut): Promise<boolean> => {
  // trim and remove dots and dashes
  rut = format(rut);

  // check if rut only contains numbers
  if (!rut.match(/^([0-9]{7}|[0-9]{8})([0-9]|k)$/)) {
    throw new Error('Input contains invalid characters');
  }
  if (rut.length !== 9 && rut.length !== 8) {
    throw new Error('Invalid RUT length');
  } else {
    try {
      return (await getDigit(rut.slice(0, -1))) === rut[rut.length - 1];
    } catch (e) {
      throw e;
    }
  }
};

const format = (rut: Rut): string => {
  rut = rut
    .toString()
    .trim()
    .toLowerCase();
  rut = rut.replace(/\./g, '');
  rut = rut.replace(new RegExp('-', 'g'), '');
  return rut;
};

export const getDigit = async (incompleteRut: Rut): Promise<string> => {
  incompleteRut = format(incompleteRut);
  // check if incompleteRut only contains numbers
  if (!incompleteRut.match(/^[0-9]+$/)) {
    throw new Error('Input contains invalid characters');
  }
  if (incompleteRut.length !== 8 && incompleteRut.length !== 7) {
    throw new Error('Invalid RUT length');
  } else {
    var sum = 0;
    var revRut = incompleteRut
      .split('')
      .reverse()
      .join('');
    for (var i = 0; i < incompleteRut.length; i++) {
      sum = sum + parseInt(revRut[i]) * multipliers[i];
    }
    var value = 11 - (sum % 11);
    if (value > 0 && value <= 9) {
      return value.toString();
    } else if (value === 10) {
      return 'k';
    } else {
      //if value == 11
      return '0';
    }
  }
};

export const split = async (rut: Rut): Promise<[string, string]> => {
  try {
    const isValid = await verify(rut);
    if (!isValid) {
      throw new Error('Invalid RUT');
    }
  } catch (e) {
    throw e;
  }

  const formatted = format(rut);

  return [
    formatted.slice(0, formatted.length - 1),
    formatted.slice(formatted.length - 1)
  ];
};
