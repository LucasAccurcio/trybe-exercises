const { uppercase } = require('./exercicio1');


describe('Faz teste', () => {
  
  it('Se está tudo em maiusculo', (done) => {
    uppercase('ola', (result => {
      try {
        expect(result).toBe('OLA');
        done();
      } catch (error) {
        done(error);
      }
    }));
  });
});