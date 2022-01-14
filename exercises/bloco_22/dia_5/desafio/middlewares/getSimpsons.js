const fs = require('fs');

module.exports = (_req, res) => {
  const theSimpsons = fs.readFileSync('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(theSimpsons);
  res.status(200).json(simpsons);
};