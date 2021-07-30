const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((elemento) => elemento === name);
}
console.log(hasName(names, 'Ana'))

// OU DESTA OUTRA FORMA

const retorno = names.some((value, index) => value === 'Ana');
console.log(retorno);