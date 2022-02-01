const express = require('express');

const router = express.Router({ mergeParams: true });

const user = require('./index');
const authAdm = require('../../middlewares/authAdm');

router.post('/login', user.findUser);
router.post('/register', user.createUser);
router.post('/token', user.tokenGenerator);
router.post('/create-user', authAdm, user.createUserAdm);
router.get('/users/sellers', user.findSellers);
router.get('/users', user.getAllUsers);
router.delete('/delete-user', authAdm, user.deleteUser);

module.exports = router;
