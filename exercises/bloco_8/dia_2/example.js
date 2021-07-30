const numbers = [19, 21, 31, 3, 45, 22, 15];

const div3e5 = numbers.find((number) => (number % 5 === 0 && number % 3 === 0));
console.log('********EXEMPLO 1************');
console.log(div3e5);

// *****************************

// exemplo 2 
console.log('********EXEMPLO 2************');
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  // Adicione seu código aqui:
  const nome = array.find((name) => name.length >= 5); 
  return nome;
}
console.log(findNameWithFiveLetters(names));

// exemplo 3
console.log('********EXEMPLO 3************');
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find(musica => musica.id === id);
}

console.log(findMusic('31031685'))