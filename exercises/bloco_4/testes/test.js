/* function validaData(data) {
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (dateRegex.test(data)) {
    return true;
  }
  return false;
}
const data = '01/01/2022';
console.log(validaData(data));
 */

/* const arrayObjects = [
  { name: 'Lucas', age: 5 },
  { name: 'Tiago', age: 4 },
  { name: 'Felippe', age: 1 },
];
// const { name, age } = arrayObjects[0];
// console.log(age);
arrayObjects.forEach

const newArray = arrayObjects.map(({ name, age }) => [name, age]);
console.log(newArray[0]);
 */

const isValid = 'string';
const isNotValid = 10;

if ((typeof isValid || typeof isNotValid) !== 'number') return console.log('é diferente de number')
