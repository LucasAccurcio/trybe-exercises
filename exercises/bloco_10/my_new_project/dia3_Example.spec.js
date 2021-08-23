const math = require('./dia3_Example');
jest.mock("./dia3_Example");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test('#subtrair', () => {

  math.subtrair = jest.fn();
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  math.subtrair(3, 1);
  expect(math.subtrair).toHaveBeenCalledWith(3, 1);

  math.subtrair.mockImplementation((a, b) => a - b);
  expect(math.subtrair(3, 1)).toBe(2);
});

