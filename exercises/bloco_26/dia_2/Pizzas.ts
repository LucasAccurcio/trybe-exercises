type Slices = 4 | 6 | 8;  

interface Pizza {
  flavor: string;
  slice: Slices;
}

let calabresa: Pizza = {
  flavor: 'Calabresa',
  slice: 8,
} 
console.log(calabresa);

let marguerita: Pizza = {
  flavor: 'Marguerita',
  slice: 6,
}
console.log(marguerita);


let nutella: Pizza = {
  flavor: 'Nutella',
  slice: 4,
}
console.log(nutella);

interface CommumPizzas extends Pizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni',
}

interface VegPizzas extends Pizza {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo',
}

type Sugar = 'Nutella' | 'Goiabada com Queijo' | 'Marshmallow';
interface SweetPizzas extends Pizza {
  flavor: Sugar,
  slice: 4,
}

let calabresa2: CommumPizzas = {
  flavor: 'Calabresa',
  slice: 8,
}
console.log(calabresa2);

let frango: CommumPizzas = {
  flavor: 'Frango',
  slice: 6,
}
console.log(frango);

let pepperoni: CommumPizzas = {
  flavor: 'Pepperoni',
  slice: 8,
}
console.log(pepperoni);

let palmito: VegPizzas = {
  flavor: 'Palmito',
  slice: 8,
}
console.log(palmito);

let nutella2: SweetPizzas = {
  flavor: 'Nutella',
  slice: 4
};
console.log(nutella2);
