"use strict";
// ./length.ts
// criamos um array de strings com as unidades de medida
// o tipo inferido pelo TypeScript será "string[]", essa é a sintaxe para tipar um array
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
utils_1.default.exec(units); // chamamos diretamente a função exec de utils.ts
