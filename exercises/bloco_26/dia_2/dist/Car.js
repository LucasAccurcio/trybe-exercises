"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colors_1 = __importDefault(require("./Colors"));
const Doors_1 = __importDefault(require("./Doors"));
const Directions_1 = __importDefault(require("./Directions"));
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    honk() {
        console.log('Buzinando "Fooommm"');
    }
    openTheDoor(door) {
        console.log(`Porta ${door} aberta`);
    }
    closeTheDoor(door) {
        console.log(`Porta ${door} fechada`);
    }
    turnOn() {
        console.log(`Carro ligado.`);
    }
    turnOff() {
        console.log(`Carro desligado.`);
    }
    speedUp() {
        console.log(`Acelerarando o carro.`);
    }
    speedDown() {
        console.log(`Desacelerando o carro.`);
    }
    stop() {
        console.log(`Para o carro`);
    }
    turn(direction) {
        console.log(`Vira o carro para ${direction}.`);
    }
}
const driver1 = new Car('Volkswagen Gol', Colors_1.default.prata, 4);
console.log(driver1);
driver1.turnOn();
driver1.speedUp();
driver1.turn(Directions_1.default.Left);
driver1.turn(Directions_1.default.Rigth);
driver1.speedUp();
driver1.speedDown();
driver1.turn(Directions_1.default.Rigth);
driver1.speedDown();
driver1.stop();
driver1.openTheDoor(Doors_1.default.BEHIND_RIDE);
driver1.closeTheDoor(Doors_1.default.BEHIND_RIDE);
driver1.speedUp();
driver1.turn(Directions_1.default.Rigth);
driver1.speedUp();
driver1.speedDown();
driver1.turn(Directions_1.default.Left);
driver1.turn(Directions_1.default.Rigth);
driver1.speedDown();
driver1.stop();
