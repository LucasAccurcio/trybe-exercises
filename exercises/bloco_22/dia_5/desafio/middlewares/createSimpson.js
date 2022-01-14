const fs = require('fs');

module.exports = (req, res) => {
  const { id, name } = req.body;
  const newId = Number(id);
  const theSimpsons = fs.readFileSync('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(theSimpsons);

  simpsons.push({ id:newId, name });
  const newSimpsons = JSON.stringify(simpsons);

  fs.writeFileSync('./simpsons.json', newSimpsons);

  res.status(201).json({ message: 'Simpson criado com sucesso!' });
};