import Colors from './Colors';
import Doors from './Doors';
import Directions from './Directions';

class Car {
  _brand: string;  
  _color: Colors;
  _doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }
  
  honk(): void {
    console.log('Buzinando "Fooommm"');
  }

  openTheDoor(door: Doors): void {
    console.log(`Porta ${door} aberta`)
  }

  closeTheDoor(door: Doors): void {
    console.log(`Porta ${door} fechada`)
  }

  turnOn(): void {
    console.log(`Carro ligado.`)
  }

  turnOff(): void {
    console.log(`Carro desligado.`)
  }

  speedUp(): void {
    console.log(`Acelerarando o carro.`)
  }

  speedDown(): void {
    console.log(`Desacelerando o carro.`)
  }

  stop(): void {
    console.log(`Para o carro`)
  }

  turn(direction: Directions): void {
    console.log(`Vira o carro para ${direction}.`)
  }
}

const driver1 = new Car('Volkswagen Gol', Colors.prata, 4);
console.log(driver1);

driver1.turnOn();

driver1.speedUp();
driver1.turn(Directions.Left);
driver1.turn(Directions.Rigth);
driver1.speedUp();
driver1.speedDown();
driver1.turn(Directions.Rigth);
driver1.speedDown();
driver1.stop();
driver1.openTheDoor(Doors.BEHIND_RIDE);
driver1.closeTheDoor(Doors.BEHIND_RIDE);
driver1.speedUp();
driver1.turn(Directions.Rigth);
driver1.speedUp();
driver1.speedDown();
driver1.turn(Directions.Left);
driver1.turn(Directions.Rigth);
driver1.speedDown();
driver1.stop();