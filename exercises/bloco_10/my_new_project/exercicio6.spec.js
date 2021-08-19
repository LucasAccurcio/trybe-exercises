const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {

      const filterByName = Animals.find((animal) => animal.name === name);

      if (filterByName) {
        return resolve(filterByName);
      };

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

const findAnimalByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {

      const filterByAge = Animals.filter((animal) => animal.age === age);

      if (filterByAge.length > 0) {
        return resolve(filterByAge);
      };

      return reject(new Error('Nenhum animal com essa idade!'));
    }, 100);
  })
);

// ---------------------

  describe('Testa retorno por nome', () => {
    it('Verifica nome', () => (
      findAnimalByName('Dorminhoco').then((listAnimal) => {
        expect(listAnimal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ))
  });
  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => (
        findAnimalByName('Dorminhoco').then((animal) => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        })
      ));
    });
  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch(error =>
        expect(error.message).toEqual('Nenhum animal com esse nome!')
      );
    });
  }); 
}); 

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => (
      findAnimalByAge(1).then((animal) => {
        expect(animal[0]).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ));
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(findAnimalByAge(4)).rejects
        .toEqual(new Error('Nenhum animal com essa idade!'));
    });
  }); 
});