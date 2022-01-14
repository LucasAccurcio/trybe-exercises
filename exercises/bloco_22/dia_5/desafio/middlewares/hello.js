module.exports = (req, res) =>  {
  const name = req.body.name;
  return res.status(201).json({ message: `Hello, ${name}!`});
};

