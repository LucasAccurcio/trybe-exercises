//1. Imprime um quadrado sendo n o numero de linhas e colunas

let nroQuadrado = 5;
for (let index = 0; index < nroQuadrado; index +=1) {
  let linha = "";
  for (let index2 = 0; index2 < nroQuadrado; index2 +=1) {
    linha = linha +"*";
  }
  console.log(linha);
}

console.log("------------------");

//2. Imprime um triângulo sendo n a base do triângulo
let nroBase = 5;
for (let index = 0; index < nroBase; index +=1) {
  let linha = "";
  for (let index2 = 0; index2 <= index; index2 +=1) {
    linha = linha +"*";
  }
  console.log(linha);
}

console.log("------------------");

//3. Triângulo invertido
let nroBase2 = 5;
for (let index = 0; index < nroBase2; index +=1) {
  let linha = "";
  for (let indexEspaco = index+1; indexEspaco < nroBase2; indexEspaco +=1){
      linha = linha+"-";
  }
    for (let index2 = 0; index2 <= index; index2 +=1) {
      linha = linha +"*";
    }
  console.log(linha);
}
