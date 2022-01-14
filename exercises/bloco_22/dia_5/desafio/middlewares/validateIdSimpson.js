const fs = require('fs');

module.exports = (req, res, next) => {
  const { id } = req.body;
  const newId = Number(id);
  const theSimpsons = fs.readFileSync('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(theSimpsons);

  if (simpsons.map(({ id }) => id).includes(newId)) {
    return res.status(500).json({ message: 'Não é possível cadastrar esse simpson!'});
  }

  next();
};