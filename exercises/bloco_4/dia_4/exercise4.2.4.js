//Exercício 4 - Retorna maior nome do array

function maiorNome (array) {
  let nomes = array;
  let maiorNome = nomes[0];
  for(let index=1;index<nomes.length;index+=1){
    let nomeAtual = nomes[index];
    if(maiorNome.length < nomeAtual.length){
      maiorNome = nomes[index];
    }
  }
  return maiorNome;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log("Maior nome = "+ maiorNome(nomes));
