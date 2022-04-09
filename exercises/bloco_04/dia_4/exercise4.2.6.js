//Exercício 6
/* Crie uma função que receba um número inteiro N e retorne o 
somatório de todos os números de 1 até N. */

function soma1aN (n) {
  let soma = 0;
  for(let index=1; index <= n; index +=1) {
    soma = soma + index;
  }
  return soma;
}

let n = 5;

console.log("Soma de 1 a "+n+" = = "+ soma1aN(n));