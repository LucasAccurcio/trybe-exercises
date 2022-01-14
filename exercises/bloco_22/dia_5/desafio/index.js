const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const ping = require('./middlewares/ping');
const hello = require('./middlewares/hello');
const greetings = require('./middlewares/greeting');
const getSimpsons = require('./middlewares/getSimpsons');
const getSimpsonsById = require('./middlewares/getSimpsonById');
const createSimpson = require('./middlewares/createSimpson');
const validateIdSimpson = require('./middlewares/validateIdSimpson');
const validateNameSimpson = require('./middlewares/validateNameSimpson');

app.get('/ping', ping);
app.get('/simpsons', getSimpsons);
app.get('/simpsons/:id', getSimpsonsById);

app.use(bodyParser.json());
app.post('/hello', hello);
app.post('/greetings', greetings);
app.use(validateIdSimpson);
app.use(validateNameSimpson);
app.post('/simpsons', createSimpson);

app.listen(3000, () => console.log('ouvindo na porta 3000!'));