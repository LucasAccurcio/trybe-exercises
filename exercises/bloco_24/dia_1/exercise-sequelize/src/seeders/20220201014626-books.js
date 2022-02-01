'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
    title: 'John Doe',
    author: 'Doe John',
    pageQuantity: 290,
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  {
    title: 'O Festim dos Corvos',
    author: 'George R.R',
    pageQuantity: 490,
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
{
  title: 'A Guerra dos Tronos',
  author: 'George R.R',
  pageQuantity: 290,
  createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
},
{
  title: 'O Símbolo Perdido',
  author: 'Dan Brown',
  pageQuantity: 390,
  createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
},
], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
