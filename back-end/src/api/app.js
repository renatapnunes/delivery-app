const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
const root = require('../controllers/router');
const error = require('../middlewares/err');

const app = express();

app.use('/images', express.static(path.resolve(__dirname, '../public')));

app.use(express.json());

app.use('/', root);

app.use(error);

module.exports = app;