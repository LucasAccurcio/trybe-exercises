const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// EXERCICIO 01
// Adicione o código do exercício aqui:
// Encontre o Autor do livro pela data de Nascimento
const findAuthorBornInYear = (year) => {
  const dadosAuthor = books.find( array => array.author.birthYear === year);
  return dadosAuthor.author.name;
}
console.log(findAuthorBornInYear(1947));
assert.strictEqual(findAuthorBornInYear(1947), 'Stephen King');

// EXERCICIO 02
// Encontre o livre de menor nome
function smallerName() {
  let menorNome = books[0].name.length;
  let nameBook = books[0].name;
  books.forEach((book) => {
    if (book.name.length < menorNome) {
      menorNome = book.name.length;
      nameBook = book.name;
    }
  });
  return nameBook;
}
smallerName();
console.log(smallerName());
assert.strictEqual(smallerName(), 'Duna');

// EXERCICIO 03
// Encontre o primeiro livro cujo nome possui 26 caracteres
function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook());

// EXERCICIO 04
// ORDENE OS LIVROS POR ORDEM DE LANCAMENTO

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc());

// EXERCICIO 05
// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário
//const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear > 1900);
}
console.log(everyoneWasBornOnSecXX());

//assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// Exercicio 06
// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
//const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((element) => element.releaseYear > 1979 && element.releaseYear < 1990);
}
console.log(someBookWasReleaseOnThe80s());
//assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

// Exercicio 07
// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((book) =>
  !books.some((bookSome) =>
  (bookSome.author.birthYear === book.author.birthYear)
  && (bookSome.author.name !== book.author.name))); 
}
console.log(authorUnique());
assert.strictEqual(authorUnique(), expectedResult);