let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos 
//   os valores nele contidos com a função console.log()
/*for (let imprime of numbers) {
  console.log(imprime);
}*/

//2. Para o segundo exercício, some todos os valores contidos 
//   no array e imprima o resultado;
let soma = 0;
for (let indice = 0; indice < numbers.length; indice+=1) {
  soma = soma + numbers[indice];
}
console.log(soma);

//3. Para o terceiro exercício, calcule e imprima a média aritmética
//   dos valores contidos no array;
let media = soma/numbers.length;
console.log(media);

//4. Com o mesmo código do exercício anterior, caso o valor final 
//   seja maior que 20, imprima a mensagem: "valor maior que 20". 
//   Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media > 20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20");
}

//5. Utilizando for, descubra qual o maior valor contido no array e
//   imprima-o;
let maiorValor = 0;
for (let indice = 0; indice < numbers.length; indice+=1) {
  soma = soma + numbers[indice];
}
console.log("Soma dos números do array = "+soma);

//6. Descubra quantos valores ímpares existem no array e imprima o 
//   resultado. Caso não exista nenhum, imprima a mensagem: 
//   "nenhum valor ímpar encontrado"
let impar = 0;
for (let indice = 0; indice < numbers.length; indice +=1) {
  if((numbers[indice]%2)==1){
    impar += 1;
  }
}
console.log("Quantidade de números ímpares = "+impar);

/*PERCORRE DOIS ARRAYS COMPARANDO OS VALORES DE UM COM O OUTRO
let numbers2 = [6, 10, 4, 20, 71, 9, 101, 3, 36, 28];
let soma = 0;
for (let indice = 0; indice < numbers.length; indice+=1) {
  for (let indice2 = 0; indice2 < numbers.length; indice2+=1) {
    //console.log(numbers[indice]+" : "+numbers2[indice2]);
      if(numbers[indice] === numbers2[indice2]){
        soma += 1;
      }
    }
  }
console.log(soma);*/
