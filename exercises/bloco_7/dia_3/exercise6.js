const assert = require('assert');
// escreva a função addOne aqui
const addOne = (n) => {
  const output = []; // Isso fará que o array principal (myArray) não altere
  for (let i = 0; i < n.length; i += 1) {
    let valor = n[i] + 1;
    output.push(valor);
  };
  return output;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);