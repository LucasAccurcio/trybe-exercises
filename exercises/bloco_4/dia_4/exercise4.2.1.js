//Exercício 1
/* Crie uma função que receba uma string e retorne true se 
for um palíndromo , ou false , se não for. 
Palíndro = palavra que fica igual de trás para frente*/

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