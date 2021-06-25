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
let nroBase2 = 10;
for (let index = 0; index < nroBase2; index +=1) {
  let linha = "";
  for (let indexEspaco = index+1; indexEspaco < nroBase2; indexEspaco +=1){
    linha = linha+" ";
  }
  for (let index2 = 0; index2 <= index; index2 +=1) {
    linha = linha +"*";
  }
  console.log(linha);
}

//4. Faça uma pirâmide sendo n a base dela
let nroBasePiramide = 5;
let altura = (nroBasePiramide/2)+0.5;
console.log(altura);
let linha = "";
let contadorLinha = nroBasePiramide-2;
for (let index = 0; index < altura; index +=1) {
  
  // if(index === altura-1) {
  //     for (let index2 = 0; index2 < nroBasePiramide; index2 +=1) {
  //       linha = linha +"*";
  //     }
  //   }
  //   else{
  //     if( )
  //     for (let index3 = 0; index3 < contadorLinha; index3 +=1) {
  //       linha = linha +"*";
  //     }
  //     linha = linha+"-";
  //     contadorLinha -= 1;
  //   }
  console.log(contadorLinha);
  contadorLinha -= 1;
}

let nroBase = 5;
let linha = "";
for (let index = 0; index < nroBase; index +=1) {
    linha = linha +"*";
      console.log(linha);
  }

