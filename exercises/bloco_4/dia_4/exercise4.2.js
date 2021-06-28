function palindromo (string) {
  let palavra = string;
  let aoContrario = "";
  let tamanhoPalavra = palavra.length;
  
  for(let index = tamanhoPalavra-1; index >= 0; index -=1) {
      aoContrario += palavra[index];
    }
    if(palavra === aoContrario){
      return "A palavra " + palavra + " é um Palíndromo";
    }
    else {
      return "A palavra " + palavra + " não é um Palíndromo";
    }

} 

console.log(palindromo("desenvolvimento"));
console.log(palindromo("arara"));

function retornaIndiceMaiorValor (array){
  let numeros = array;
  let maior = numeros[0];
  let indiceMaior = 0;
  for (let key in numeros) {
    if(numeros[key]> maior){
      maior = numeros[key];
      indiceMaior = key;
    }
  }
  return indiceMaior
}

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
  return indiceMenor
}

let numeros = [2, 4, 6, 7, 10, 0, -3];

//Retorna índice com o maior valor
let indiceMaiorNumero = retornaIndiceMaiorValor(numeros);
console.log("O índice do maior valor é o "+indiceMaiorNumero);

//Retorna índice com o menor valor
let indiceMenorNumero = retornaIndiceMenorValor(numeros);
console.log("O índice do menor valor é o "+indiceMenorNumero);


