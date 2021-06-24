let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos 
//   os valores nele contidos com a função console.log()
// for (let imprime of numbers) {
//   console.log(imprime);
// }

//2. Para o segundo exercício, some todos os valores contidos 
//   no array e imprima o resultado;
let soma = 0;
for (let indice = 0; indice < numbers.length; indice+=1) {
  soma = soma + numbers[indice];
}
console.log("2.Soma dos valores do array = "+soma);

//3. Para o terceiro exercício, calcule e imprima a média aritmética
//   dos valores contidos no array;
let media = soma/numbers.length;
console.log("3.Média aritimética dos valors do array = "+media);

//4. Com o mesmo código do exercício anterior, caso o valor final 
//   seja maior que 20, imprima a mensagem: "valor maior que 20". 
//   Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media > 20) {
  console.log("4.valor maior que 20");
}
else {
  console.log("4.valor menor ou igual a 20");
}

//5. Utilizando for, descubra qual o maior valor contido no array e
//   imprima-o;
let maiorValor = numbers[0];
for (let indice = 1; indice < numbers.length; indice+=1) {
  if(maiorValor < numbers[indice]) {
    maiorValor = numbers[indice];
  }
}
console.log("5.Maior valor do array é = "+maiorValor);

//6. Descubra quantos valores ímpares existem no array e imprima o 
//   resultado. Caso não exista nenhum, imprima a mensagem: 
//   "nenhum valor ímpar encontrado"
let impar = 0;
for (let indice = 0; indice < numbers.length; indice +=1) {
  if((numbers[indice]%2)==1){
    impar += 1;
  }
}
console.log("6.Quantidade de números ímpares = "+impar);

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorValor = numbers[0];
for (let indice = 1; indice < numbers.length; indice+=1) {
  if(menorValor > numbers[indice]) {
    menorValor = numbers[indice];
  }
}
console.log("7.Menor valor do array é = "+menorValor);

//8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let indice = 0; indice < 25; indice += 1){
  array[indice] =  indice+1;
}
console.log(array);
//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let divDois = [];
for (let indice = 0; indice < 25; indice += 1){
  divDois[indice] = array[indice]/2;
}
console.log(divDois);

console.log("EXERCÍCIOS BÔNUS");
console.log("Array em ordem original = "+numbers);
//BÔNUS
//1.Ordene o array numbers em ordem crescente e imprima seus valores;
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log("1. Array ordem crescente = "+numbers);

//2.Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log("2. Array ordem decrescente = "+numbers);

//3.Novo array a partir do array original multiplicando o primeiro valor pelo próximo
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let tamanhoArray = numbers.length;
tamanhoArray -= 1;
for (let index = 0; index < numbers.length; index += 1) {
    if (index == tamanhoArray){
      newNumbers[index] = (numbers[index] * 2);
    }
    else{
      newNumbers[index] = (numbers[index] * numbers[(index+1)]);
    }
}
console.log("3. Novo array a partir do original "+newNumbers);
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
