const number = require('./dia3_exercicio1');

describe('Testa a função gerar numero aleatórios', () => {
  test('Se existe', () => {

    number.randomNumber = jest.fn();

    number.randomNumber();
    expect(number.randomNumber).toHaveBeenCalled();
  })

  test('Se retorna um valor', () => {
    number.randomNumber.mockReset();
    number.randomNumber = jest.fn().mockReturnValue(10);
    expect(number.randomNumber()).toBe(10);
  })

  test('Quantas vezes foi chamada', () => {
    number.randomNumber.mockReset();
    number.randomNumber = jest.fn();

    number.randomNumber();
    number.randomNumber();
    number.randomNumber();
    expect(number.randomNumber).toHaveBeenCalledTimes(3);

  })
  
  
  describe('Exercicio 2 - Gerar nova implementacao na funcao', () => {
    test('Deve receber 2 parametros e retornar a divisão', () => {
      number.randomNumber.mockReset();
      number.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
      number.randomNumber(10, 5);

      expect(number.randomNumber).toHaveBeenCalled();
      expect(number.randomNumber).toHaveBeenCalledTimes(1);
      expect(number.randomNumber).toHaveBeenCalledWith(10, 5);
      expect(number.randomNumber(10, 5)).toBe(2);
    })
  })

  describe('Exercicio 3 - Gerar nova implementação 2x', () => {
    test('Deve receber 3 parametros e multiplicá-los', () => {
      number.randomNumber.mockReset();
      number.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
      expect(number.randomNumber(2, 2, 2)).toBe(8);
    })

    test('Resetar implementar e criar nova recebendo 1 parametro e retornando seu 2', () => {
      number.randomNumber.mockReset();
      number.randomNumber = jest.fn().mockImplementation((a) => a * 2);
      expect(number.randomNumber(4)).toBe(8);
    })
  })
})