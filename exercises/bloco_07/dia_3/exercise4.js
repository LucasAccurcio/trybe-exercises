const assert = require('assert');
const { type } = require('os');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(typeof myFizzBuzz, 'function');
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', "Esse número não é divisível por 3 e 5!");
assert.strictEqual(myFizzBuzz(9), 'fizz', "Esse número não é divisível por 3 ou apenas por 3!");
assert.strictEqual(myFizzBuzz(10), 'buzz', "Esse número não é divisível por 5 ou apenas por 5!");
assert.notStrictEqual(myFizzBuzz(11), 'fizzbuzz', "Esse número não é divisível nem por 3 e nem por 5!");
assert.strictEqual(myFizzBuzz('fizzbuzz'), false, 'Isso não é um número!');
