const express = require('express');
const user = require('./index');

const router = express.Router({ mergeParams: true });

router.post('/login', user.findUser);
router.post('/register', user.createUser);

module.exports = router;
