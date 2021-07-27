const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let contador = 1;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results = results + contador;
      contador += 1;
    } else {
      results = results + characters[index];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
const output = removeVowels(parameter);
assert.strictEqual(output, result);