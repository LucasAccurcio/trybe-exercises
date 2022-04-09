

//Exercício 3 - Retorna o índice com menor valor do Array
function retornaIndiceMenorValor (array){
  let numeros = array;
  let menor = numeros[0];
  let indiceMenor = 0;
  for (let key in numeros) {
    if(numeros[key] < menor){
      menor = numeros[key];
      indiceMenor = key;
    }
  }
  let retorno = [menor, indiceMenor];
  return retorno;
  // return indiceMenor;
}

let numeros = [2, 4, 6, 7, 10, 0, -3];

//Retorna índice com o menor valor
let indiceMenorNumero = retornaIndiceMenorValor(numeros);
console.log("O índice do menor valor ("+indiceMenorNumero[0]+") é o "+indiceMenorNumero[1]);
