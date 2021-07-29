/* Exercício 5
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

function numerosRepetidos (array){
  let numeros = array;
  let numerosComparacao = array;
  let indiceRepeticao = 0;
  let maiorRepeticao = numeros[0];
  for (let key in numeros) {
    let repete = 0;
    for(let key2 in numerosComparacao){
      if(numeros[key] === numerosComparacao[key2]){
        repete += 1;
      }
    }
    if(repete > indiceRepeticao){
      indiceRepeticao = repete;
      maiorRepeticao = numeros[key];
    }
  }
  return maiorRepeticao;
}

let numeros = [2, 3, 8, 5, 8, 2, 8];

console.log("Número que mais se repete = "+ numerosRepetidos(numeros));