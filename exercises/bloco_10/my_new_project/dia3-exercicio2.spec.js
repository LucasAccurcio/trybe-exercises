const funcoes = require('./dia3-exercicio2');
jest.mock('./dia3-exercicio2');

describe('Testa funções implementadas', () => {
  it('UPPERCASE', () => {
    funcoes.uppercase = jest.fn().mockReturnValue('STRING');
    funcoes.uppercase('string')
    expect(funcoes.uppercase).toHaveBeenCalled();
    expect(funcoes.uppercase).toHaveBeenCalledTimes(1);
    expect(funcoes.uppercase).toHaveBeenCalledWith('string');
    expect(funcoes.uppercase('string')).toBe('STRING');
  })

  it('Reimplementa função para lowerCase', () => {
    funcoes.uppercase.mockReset();
    funcoes.uppercase = jest.fn().mockImplementation((string) => string.toLowerCase());
    funcoes.uppercase('IMPLEMENTACAO');
    expect(funcoes.uppercase).toHaveBeenCalledTimes(1);
    expect(funcoes.uppercase).toHaveBeenCalledWith('IMPLEMENTACAO');
    expect(funcoes.uppercase('Implementacao')).toBe('implementacao');
  })

  it('Teste firstLetter', () => {
    funcoes.firstLetter = jest.fn().mockReturnValue('b');
    funcoes.firstLetter('bom dia')
    expect(funcoes.firstLetter).toHaveBeenCalled();
    expect(funcoes.firstLetter).toHaveBeenCalledTimes(1);
    expect(funcoes.firstLetter).toHaveBeenCalledWith('bom dia');
    expect(funcoes.firstLetter('bom dia')).toBe('b');
  })

  it('Reimplementa firstLetter para lastLetter', () => {
    funcoes.firstLetter.mockReset();
    funcoes.firstLetter = jest.fn()
      .mockImplementation((string) => {
        for (let i = string.length - 1; i > 0; i -= 1) {
          return string[i];
        }
    });
    funcoes.firstLetter('bom dia')
    expect(funcoes.firstLetter).toHaveBeenCalled();
    expect(funcoes.firstLetter).toHaveBeenCalledTimes(1);
    expect(funcoes.firstLetter).toHaveBeenCalledWith('bom dia');
    expect(funcoes.firstLetter('bom dia')).toBe('a');
  })

  it('Teste função concatena', () => {
    funcoes.concatena = jest.fn().mockReturnValue('Bom Dia!');
    funcoes.concatena('Bom', 'Dia!')
    expect(funcoes.concatena).toHaveBeenCalled();
    expect(funcoes.concatena).toHaveBeenCalledTimes(1);
    expect(funcoes.concatena).toHaveBeenCalledWith('Bom', 'Dia!');
    expect(funcoes.concatena('Bom', 'Dia!')).toBe('Bom Dia!');
  })

  it('Reimplementa funcao concatena para 3 strings', () => {
    funcoes.concatena.mockReset();
    funcoes.concatena.mockImplementation((a, b, c) => a.concat(b, c));
    expect(funcoes.concatena('O', 'l', 'á')).toBe('Olá');

    expect(funcoes.concatena).toHaveBeenCalled();
    expect(funcoes.concatena).toHaveBeenCalledTimes(1);
    expect(funcoes.concatena).toHaveBeenCalledWith('O', 'l', 'á');
    expect(funcoes.concatena('Bom', ' Dia', ' Senhores!')).toBe('Bom Dia Senhores!');
  })
})

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    funcoes.uppercase.mockReset();
    const first = jest
      .spyOn(funcoes, "uppercase")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    funcoes.uppercase.mockRestore();
    funcoes.uppercase.mockReturnValue('LOWERCASE');
    expect(funcoes.uppercase("lowercase")).toBe("LOWERCASE");
  });
});