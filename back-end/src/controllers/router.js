const express = require('express');
const products = require('./products/router');
const users = require('./users/router');

const root = express.Router({ mergeParams: true });

root.use('/', users);
root.use('/products', products);

module.exports = root;
