/* const randomNumber = () => Math.round((Math.random() * 4) + 1);

const game = (n) => {
  const nSorteado = randomNumber();
  return (n === nSorteado) ? `Jogado: ${n} / Sorteado: ${nSorteado} - Parabéns você ganhou!` : `Jogado: ${n} / Sorteado: ${nSorteado} - Tente novamente!`;
}

console.log(game(5));
console.log(game(2)); */

// Transformando a solução acima para HOF

const numberChecker = (jogado, sorteado) => jogado === sorteado;

const game = (n, callback) => {
  const nSorteado = Math.round((Math.random() * 4) + 1);
  return callback(n, nSorteado) ? `Jogado: ${n} / Sorteado: ${nSorteado} - Parabéns você ganhou!` : `Jogado: ${n} / Sorteado: ${nSorteado} - Tente novamente!`;
}

console.log(game(5, numberChecker));
console.log(game(2, numberChecker));