const fs = require('fs');

module.exports = (req, res) => {
  const { id } = req.params;
  const theSimpsons = fs.readFileSync('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(theSimpsons);
  const simpson = simpsons.find(personagem => personagem.id === parseInt(id));

  if (!simpson) {
    res.status(404).json({ message: 'Simpson not found!'});
  }
  res.status(200).json(simpson);
};