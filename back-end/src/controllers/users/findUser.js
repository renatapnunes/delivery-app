const md5 = require('md5');
const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' }).trim();
const service = require('../../services/users/userService');

const findUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.findUser(email);
    if (!user || user.password !== md5(password)) return next({ code: 404, message: 'Not found' });
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign({ data: req.body.email }, jwtKey, jwtConfig);
    const { id, password: pwd, ...objLocalStorage } = user.dataValues;
    return res.status(200).json({ ...objLocalStorage, token });
  } catch (e) {
      next(e);
  }
};

module.exports = findUser;
