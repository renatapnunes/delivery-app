const path = require('path');
const express = require('express');
const cors = require('cors');
const root = require('../controllers/router');
const error = require('../middlewares/err');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'DELETE'],
}));

app.use('/images', express.static(path.resolve(__dirname, '../../public')));

app.use(express.json());

app.use('/', root);

app.use(error);

module.exports = app;
