const express = require('express');
const getProducts = require('./getProducts');

const router = express.Router({ mergeParams: true });

router.get('/', getProducts);

module.exports = router;