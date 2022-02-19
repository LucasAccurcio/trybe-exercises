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
