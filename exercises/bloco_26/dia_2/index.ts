// ./index.ts

import { exit } from "process";
import readline from "readline-sync"; // importamos o pacote readline-sync
import Months from "./Months";
import Seasons from "./Seasons";

let months = Object.values(Months).map((month) => month);
  
const choiceMonth = readline.keyInSelect(months, 'Which month do you like to choose?', { cancel: 'Sair'});

if (choiceMonth === -1) {
  console.log('Saindo!');
  exit();
  
}

const seasonsSouth = {
  [Seasons.Outono]: [Months.Março, Months.Abril, Months.Maio, Months.Junho],
  [Seasons.Inverno]: [Months.Junho, Months.Julho, Months.Agosto, Months.Setembro],
  [Seasons.Primavera]: [Months.Setembro, Months.Outubro, Months.Novembro, Months.Dezembro],
  [Seasons.Verão]: [Months.Dezembro, Months.Janeiro, Months.Fevereiro, Months.Março],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
  [Seasons.Primavera]: seasonsSouth[Seasons.Outono],
  [Seasons.Verão]: seasonsSouth[Seasons.Inverno],
  [Seasons.Outono]: seasonsSouth[Seasons.Primavera],
  [Seasons.Inverno]: seasonsSouth[Seasons.Verão],
}

const hemispheres = {
  "Norte": seasonsNorth,
  "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });

if (choiceHemisphere === -1) {
  console.log('Saindo!');
  exit();
  
}

const month = months[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log('Mês selecionado: ' + month);
console.log('Hemisfério selecionado: ' + hemisphere);
console.log('Hemisfério selecionado: ' + hemisphere);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar

    if (months.includes(month)) console.log(seasons);
});