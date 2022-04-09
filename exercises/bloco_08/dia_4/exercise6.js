const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // -escreva seu código aqui\  
  const newArray = students.map((value, index) => ({
    name: value,
    media: (grades[index].reduce((acc, notas) => acc + notas, 0) / grades[index].length)
  }));
  return newArray;
}
console.log(studentAverage());
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

//assert.deepStrictEqual(studentAverage(), expected);