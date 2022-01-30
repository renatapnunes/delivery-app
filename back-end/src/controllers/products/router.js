const express = require('express');
const getProducts = require('./getProducts');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.get('/', auth, getProducts);

module.exports = router;
