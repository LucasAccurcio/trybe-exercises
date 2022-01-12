const fs = require('fs').promises;
module.exports = (arquivo, texto) => {
  let response = '';
  fs.writeFile(arquivo, texto);
    return 'ok';
  }

