"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_sync_1 = __importDefault(require("readline-sync")); // importamos o pacote readline-sync
const Months_1 = __importDefault(require("./Months"));
const Seasons_1 = __importDefault(require("./Seasons"));
let months = Object.values(Months_1.default).map((month) => month);
const choiceMonth = readline_sync_1.default.keyInSelect(months, 'Which month do you like to choose?', { cancel: 'Sair' });
if (choiceMonth === -1) {
    console.log('Saindo!');
    (0, process_1.exit)();
}
const seasonsSouth = {
    [Seasons_1.default.Outono]: [Months_1.default.Março, Months_1.default.Abril, Months_1.default.Maio, Months_1.default.Junho],
    [Seasons_1.default.Inverno]: [Months_1.default.Junho, Months_1.default.Julho, Months_1.default.Agosto, Months_1.default.Setembro],
    [Seasons_1.default.Primavera]: [Months_1.default.Setembro, Months_1.default.Outubro, Months_1.default.Novembro, Months_1.default.Dezembro],
    [Seasons_1.default.Verão]: [Months_1.default.Dezembro, Months_1.default.Janeiro, Months_1.default.Fevereiro, Months_1.default.Março],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [Seasons_1.default.Primavera]: seasonsSouth[Seasons_1.default.Outono],
    [Seasons_1.default.Verão]: seasonsSouth[Seasons_1.default.Inverno],
    [Seasons_1.default.Outono]: seasonsSouth[Seasons_1.default.Primavera],
    [Seasons_1.default.Inverno]: seasonsSouth[Seasons_1.default.Verão],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
if (choiceHemisphere === -1) {
    console.log('Saindo!');
    (0, process_1.exit)();
}
const month = months[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log('Mês selecionado: ' + month);
console.log('Hemisfério selecionado: ' + hemisphere);
console.log('Hemisfério selecionado: ' + hemisphere);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
