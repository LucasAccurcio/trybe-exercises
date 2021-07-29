const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.random() * (50 - 15) + 15; //Formula para encontrar um número entre dois valores
const warriorDamage = () => Math.random() * (60 - 30) + 30; //Formula para encontrar um número entre dois valores
const mageDamage = (mage) => {
  let mageDamage = Math.random() * (90 - 45) + 45; //Formula para encontrar um número entre dois valores
  let manaConsumption = mage.mana;
  if (manaConsumption > 15) {
    manaConsumption -= 15;
    return { mageDamage, manaConsumption };
  } else {
    mageDamage = 0;
    return { mageDamage, manaConsumption };
  }
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (dragon, warrior) => {
    const dano = warriorDamage();
    warrior.damage = dano;
    dragon.healthPoints -= dano;
    return { warrior, dragon };
  },
  mageTurn: (mage, dragon) => {
    const danoMana = mageDamage(mage);
    const dano = danoMana.mageDamage;
    const mana = danoMana.manaConsumption;
    mage.damage = dano;
    mage.mana = mana;
    dragon.healthPoints -= dano;
    return { mage, dragon };
  },
  dragonTurn: (mage, warrior, dragon) => {
    const dano = dragonDamage();
    dragon.damage = dano;
    warrior.healthPoints -= dano;
    mage.healthPoints -= dano;
    return { mage, warrior, dragon};
  },
  turnsReturn: () => battleMembers,
};

for (let i = 1; i < 100; i += 1) {
    console.log(`${i}ª rodada:`);
    gameActions.warriorTurn(dragon, warrior);
    gameActions.mageTurn(mage, dragon);
    let lifeMage = gameActions.turnsReturn().mage.healthPoints;
    let lifeWarrior = gameActions.turnsReturn().warrior.healthPoints;
    const lifeDragon = gameActions.turnsReturn().dragon.healthPoints;
    if (lifeDragon <= 0) {
      console.table(gameActions.turnsReturn());
      console.log('O dragão morreu!');
      break;
    } else {
      gameActions.dragonTurn(mage, warrior, dragon);
      lifeMage = gameActions.turnsReturn().mage.healthPoints;
      lifeWarrior = gameActions.turnsReturn().warrior.healthPoints;
      if (lifeMage <= 0) {
        console.table(gameActions.turnsReturn());
        console.log('Seu Mago morreu!');
        break;
      } else if (lifeWarrior <= 0){
        console.table(gameActions.turnsReturn());
        console.log('Seu Guerreiro morreu!');
        break;
      } else {
        console.table(gameActions.turnsReturn());
      }
    }
}
