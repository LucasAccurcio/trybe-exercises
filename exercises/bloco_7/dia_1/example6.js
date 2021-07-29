// Troca x pela palavra recebida como parâmetro
function trocaPalavra (frase, palavra) {
  words = frase.split(' ');
  let novaFrase = '';
  for (let word of words) {
    if (word === 'x') {
      word = palavra;
    }
    novaFrase += `${word} `;
  }
  return novaFrase;
}

//*********************
// Adiciona 5 Skill em um Array e imprime junto com a frase modificado anteriormente.
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];
let newString = trocaPalavra('Tryber x aqui', 'Lucas');
array.forEach((skill) => {
  newString = `${newString}
  - ${skill}`
});

newString = `${newString}
#go Trybe!`

console.log(newString);


