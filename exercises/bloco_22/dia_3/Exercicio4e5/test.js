const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escreveNoArquivo = require('./escreveNoArquivo');
describe('Exercicio 4:', () => {
  describe('Executa a função escreveNoArquivo', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = escreveNoArquivo('file.txt', 'Olá, meu nome é Lucas!');

        expect(resposta).to.be.a('string');
      });

      it('Escreve no arquivo e retorna "ok"', () => {
        const resposta = escreveNoArquivo('file.txt', 'Olá, meu nome é Lucas!');

        expect(resposta).to.be.equals('ok');
      });
    });
  });
});


describe('Exercicio 5:', () => {
  describe('Executa a função escreveNoArquivo', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync')
        .returns('ok');
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = escreveNoArquivo('file2.txt', 'Teste com Sinon!');

        expect(resposta).to.be.a('string');
      });

      it('Escreve no arquivo e retorna "ok"', () => {
        const resposta = escreveNoArquivo('file2.txt', 'Teste com Sinon!');

        expect(resposta).to.be.equals('ok');
      });
    })
  });
});