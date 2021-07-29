let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};
/*console.log("Bem vinda "+info.personagem);

//Exibe todos os índices do objeto
for (let key in info) {
  console.log(key);
}

//Exibe todos os valores das chaves do objeto.
for (let key in info) {
  console.log(info[key]);
}*/

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain Dell\'s Four Color Comics #178', 
  nota: 'O último MacPatinhas', 
  recorrente: 'Sim'
};

let imprime = '';
for (let key in info, info2) {
  
  if(info[key] === 'Sim' && info2[key] === 'Sim'){
    console.log("Ambos recorrentes");
     }
    else{
    console.log(info[key] + " e " + info2[key]);
    }
}
