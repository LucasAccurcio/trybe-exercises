module.exports = (numero) => {
  if (typeof numero !== 'number') {
    return 'erro';
  }

  if (numero > 0) {
    return 'positivo';
  }

  if (numero < 0) {
    return 'negativo';
  }

  return 'neutro';
};
