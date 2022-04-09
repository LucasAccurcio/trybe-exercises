const assert = require('assert');

// escreva greet abaixo
  const greet = (...name) => {
    if(name.length === 1) {
      return `Hi ${name}`;
    } else {
      return `${name[1]} ${name[0]}`;
    }
  };

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');