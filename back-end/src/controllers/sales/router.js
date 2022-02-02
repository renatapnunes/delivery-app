const express = require('express');
const getSales = require('./getSales');
const insertSales = require('./insertSales');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, insertSales);
router.get('/', auth, getSales);
router.get('/:id', auth, getSales);

module.exports = router;