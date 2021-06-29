function soma1aN (n) {
  let soma = 0;
  for(let index=1; index <= n; index +=1) {
    soma = soma + index;
  }
  return soma;
}

let n = 5;

console.log("Soma de 1 a "+n+" = = "+ soma1aN(n));