const { findUserById, getUserName, users } = require('./exercicio2e3');

describe('Verifica a funcao GetUserName', () => {

  it('Verifica um usuario existente', () => {
    getUserName(1).then((result) => {
      expect(result).toEqual('Mark');
    });
  });

  it('Verifica se um usuario não existe', () => {
    getUserName(3).catch((error) => (
      expect(error.message).toMatch('User with 3 not found.')
    ))
  });
})

describe('Verifica função getUserName com async/await', () => {

    it('Usuário existe', async () => {
      const result = await getUserName(1);
      expect(result).toEqual('Mark');
    });

    it('Usuário inexistente', async () => {
      try {
        await getUserName(4);
      } catch (error) {
        expect(error).toEqual(new Error(`User with 4 not found.`));
      }
    })
})