const express = require('express');
const products = require('./products/router');
const sellers = require('./users/router');
const sales = require('./sales/router');
const users = require('./users/router');

const root = express.Router({ mergeParams: true });

root.use('/', users);
root.use('/products', products);
root.use('/users/sellers', sellers);
root.use('/sales', sales);

module.exports = root;
