//Exercício 2 - Retorna o índice com maior valor do Array

function retornaIndiceMaiorValor (array){
  let numeros = array;
  let maior = numeros[0];
  let indiceMaior = 0;
  for (let key in numeros) {
    if(numeros[key] > maior){
      maior = numeros[key];
      indiceMaior = key;
    }
  }
  let retorno = [maior, indiceMaior];
  return retorno;
}

let numeros = [2, 4, 6, 7, 10, 0, -3];

//Retorna índice com o maior valor
let indiceMaiorNumero = retornaIndiceMaiorValor(numeros);
console.log("O maior valor ("+indiceMaiorNumero[0]+") tem o índice número "+indiceMaiorNumero[1]);