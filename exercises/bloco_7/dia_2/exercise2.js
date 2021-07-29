const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// Adicionar turno da manhã no objeto lesson2 (sem colocar em uma função)
lesson2.turno = 'manhã';
// Crie uma função para adicionar turno da manhã no obejto
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};
addNewKey(lesson2, 'turno', 'noite');
//console.log(lesson2);

const showKey = (obj) => {
  //console.log(Object.keys(obj));
}
showKey(lesson3);

const tamanho = (obj) => Object.keys(obj).length; // com value também funcionou
//console.log(tamanho(lesson1));

const valoresObj = (obj) => Object.values(obj);
//console.log(valoresObj(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(allLessons);

//Usando o objeto criado anteriormente busque o número de estudantes total
const estudantesTotal = (obj) => {
const array = Object.keys(obj);
let total = 0;
for (let index in array) {
  total += obj[array[index]].numeroEstudantes;
}
console.log(total);
}
//estudantesTotal(allLessons);

// Retorna o valor de acordo com o objeto e o index fornecido
const getValueByNumber = (obj, index) => {
  const array = Object.keys(obj);
  console.log(obj[array[index]]);
  }
getValueByNumber(lesson1, 0);
// Output: 'Matématica'

// Verifica se o par valor existem no objeto
const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  let verify = false;
  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) {
      verify = true;
    }
  }
  return verify;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false