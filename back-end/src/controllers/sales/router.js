const express = require('express');
const getSales = require('./getSales');
const insertSales = require('./insertSales');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.get('/', getSales);
router.post('/', auth, insertSales);

module.exports = router;