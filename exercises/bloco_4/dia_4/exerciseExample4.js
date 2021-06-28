let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  medals: {
    golden: 2,
    silver: 3,
  }
}

console.log("A jogadora "+player.name+" "+ player.lastName + " tem "+ player.age + " anos.");
console.log("Primeira vez melhor do mundo em "+ player.bestInTheWorld[0] + ".");


//For/in
//Exemplo 1
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

//Imprimir o nome em cada índice
for (let nome in names) {
  console.log("Olá " + names[nome]);
}

//Exemplo 2
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

//Imprimir a chave e os valoers do objeto
for (let carro in car) {
  console.log(carro, car[carro]);
}

//Funcão
function soma (a, b) {
  return a + b;
}
console.log(soma(5,6));