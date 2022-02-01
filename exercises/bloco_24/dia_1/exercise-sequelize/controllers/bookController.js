const express = require('express');
const { Book } = require('../src/models');
const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para buscar todos os livros.
router.get('/', async (req, res) => {
  try {
    const book = await Book.findAll({
      attributes: ['id', 'title', 'pageQuantity']
    });
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  }catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método findByPk do Sequelize para buscar um livro pelo id.
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // SE EU NÃO UTILIZAR O TIMESTAMPS NO CONTROLLER
    // PARA O CAMPO "updatedAt" PRECISO USAR A FUNÇÃO ABAIXO
    /* const book = await Book.findByPk(id, {
      attributes: ['title', 'author', 'pageQuantity', 'createdAt']}); */

    const book = await Book.findByPk(id); // UTILIZANDO O TIMESTAMP /CONTROLLERS
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método findOne do Sequelize para buscar um livro pelo id e author.
// URL a ser utilizada para o exemplo http://localhost:3000/book/search/1?email=aqui-o-author
router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { author } = req.query;
    const book = await Book.findOne({ where: { id, author }});

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método create do Sequelize para salvar um livro no banco.
router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity, createdAt } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity, createdAt });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método update do Sequelize para alterar um livro no banco.
router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity, createdAt } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity, createdAt },
      { where: { id } },
    );

    console.log(updateBook); // confira o que é retornado quando o book com o id é ou não encontrado;

    if(!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um livro no banco.
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    console.log(deleteBook) // confira o que é retornado quando o book com o id é ou não encontrado;

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;