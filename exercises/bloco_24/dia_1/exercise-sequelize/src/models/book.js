const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  pageQuantity: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  },
  {
    timestamps: false, // Como não existe o campo updatedAt, esse argumento remove a obrigatoriedade e na hora de chamar a função no controle ela não quebra.
  });

  return Book;
}

module.exports = Book;