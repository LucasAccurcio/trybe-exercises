module.exports = (req, res) =>  {
  const { name, age } = req.body;

  if (!age) {
    return res.send("Favor adicionar a idade!");
  }

  if (parseInt(age,10) < 18) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  res.status(200).json({ message: `Hello, ${name}!` });
};

