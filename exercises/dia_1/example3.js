// Crie uma função que receba um número e retorne seu fatorial
/* function fatorial (n) {
  let fatorial = 0;
  for (let i = n - 1; i > 0; i -=1) {
    let multiplicação = n * i;
    fatorial += multiplicação;
  }
  return `O fatorial de ${n} é igual a ${fatorial}`;
}
console.log(fatorial(4)); */

// Simplificação da função acima em forma recursiva

const fatorial = n => n > 1 ? n * fatorial(n -1) : 1;
console.log(fatorial(4));