/* function validaData(data) {
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (dateRegex.test(data)) {
    return true;
  }
  return false;
}
const data = '01/01/2022';
console.log(validaData(data)); */


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

/* const isValid = 'string';
const isNotValid = 10;

if ((typeof isValid || typeof isNotValid) !== 'number') return console.log('é diferente de number') */

/* function validateEmail(data) {
  // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[w-]{2,4}$/;
  const emailRegex = 	
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!emailRegex.test(data)) {
    return true;
  }
  return false
}

const email = 'lucas@gmail.com';
console.log(validateEmail(email)); */

// const obj = {
//   name: 'lucas',
//   email: 'lucas@gmail.com'
// };
// const { tel } = obj
// if(!tel) console.log('undefined')
// console.log(tel);

// const x = ["a", "b"];
// x[100] = 'gato';
// console.log(x.length);
// // console.log(x ** 2);
// const a = {};
// console.log(typeof 42.2);
// const a = { x: 1 };
// const b = { x: 1};
// console.log(b.x === a.x);

// let thing;
// let func = (str = "no arg") => {
//   console.log(str);
// }
// func(thing);
// func(null)
// var pode = ["a", 'k','b', 'c'];
// pode.pop();
// console.log(pode.pop());

// class a {
//   static m = 60;
// }
// let b = new a();
// a.m = 80;
// console.log(a.m);


// sum(10, 20);
// diff(10, 20);
// function sum(x,y) {
//   return console.log(x + y);
// }
// let diff = function(x,y) {
//   return console.log(x - y);
// }


// import * as _ from 'lodash';

// class x {
//   get y() {
//     return 42;
//   }
// }
// const retorno = new x();
// console.log(retorno.y); // resposta: x.y


/* O que são Generators e como eles funcionam?
Generators são funções especiais que podem ser executadas, pausadas e continuadas em diferentes estágios da sua execução, tudo isso graças a nova palavra reservada yield. */

/* var v = 1;
var f1 = function() {
  console.log(v);
};

var f2 = function() {
  var v = 2;
  f1();
};

f2(); */ // Resposta: 1

/* Which variable is an implicit parameter for every function in JS
- arguments
 */

/* Your code is producin this error: TypeError: Cannot read property 'reduce' of undefined.
  What does that mean?
  - You are calling a method named reduce on an object that does not exist.
   */

  /* Which of the following is NOT a unary operator?
  // Um operador unário é uma operação com apenas um operando.
  - delete 
  - instanceof *
  - void
  - typeof
   */
  const a = typeof('');


