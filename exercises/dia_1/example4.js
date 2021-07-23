// Crie uma função que receba uma frase e retorne qual a maior palavra

// Utilizando uma fuction normalmente
/* function longestWord (string) {
  let word = string.split(' ');
  let count = 0;
  let maiorPalavra = '';
  for (let c of word){
    if (c.length > count) {
      count = c.length;
      maiorPalavra = c;
    }
  }
  console.log(maiorPalavra);
} */


// Utilizando ARROW
/* const longestWord = (string) => {
  let word = string.split(' ');
  let count = 0;
  let maiorPalavra = '';
  for (let c of word){
    if (c.length > count) {
      count = c.length;
      maiorPalavra = c;
    }
  }
  return maiorPalavra;
} */

// Utilizando ARROW de forma Recursiva
const longestWord = string => string.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));