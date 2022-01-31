const express = require('express');
const user = require('./index');
const authAdm = require('../../middlewares/authAdm');

const router = express.Router({ mergeParams: true });

router.post('/login', user.findUser);
router.post('/register', user.createUser);
router.post('/token', user.tokenGenerator);
router.post('/create-user', authAdm, user.createUserAdm);
router.get('/users', user.getAllUsers);
router.delete('/delete-user', authAdm, user.deleteUser);

module.exports = router;
