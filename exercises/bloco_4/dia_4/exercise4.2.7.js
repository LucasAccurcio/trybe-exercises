//Exercício 7
/* Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . */

function compareEndString(string1, string2){
  let tamanho1 = string1.length;
  let tamanho2 = string2.length;
  console.log(tamanho1);
  console.log(tamanho2);
  if(tamanho2 >= tamanho1){
    return false;
  }
  else{
    let resultado = 0;
    let diferenca = tamanho1 - tamanho2;
    for(let index = 0; index < tamanho2; index +=1){
      if(string1[diferenca] === string2[index]){
        resultado = 1;
        diferenca += 1;
      }
      else{
        resultado = 0;
        break;
      }
    }
    if(resultado === 1){
      return true;
    }
    else {
      return false;
    }
  }
}

string1 = "LucasAccurcio";
string2 = "accurcio";

tamanho = compareEndString(string1, string2);
console.log(tamanho);
