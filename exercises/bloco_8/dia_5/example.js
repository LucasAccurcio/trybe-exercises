const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const multiply = (number = 1, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(5));