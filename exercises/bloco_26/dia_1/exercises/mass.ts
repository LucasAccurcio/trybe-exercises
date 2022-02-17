// ./length.ts
// criamos um array de strings com as unidades de medida
// o tipo inferido pelo TypeScript será "string[]", essa é a sintaxe para tipar um array

import utils from "./utils";

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

utils.exec(units); // chamamos diretamente a função exec de utils.ts