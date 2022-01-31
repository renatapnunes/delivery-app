const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' })
  .trim();
const service = require('../services/users/userService');

const UNAUTHORIZED = 401;

module.exports = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return next({ code: UNAUTHORIZED, message: 'Missing auth token' });
    const decoded = jwt.verify(token, jwtKey);
    if (!decoded) return next({ code: UNAUTHORIZED, message: 'JWT malformed' });
    const user = await service.findUser(decoded.data);
    if (user.dataValues.role === 'administrator') return next();
    return '';
  } catch (err) {
    next({ code: UNAUTHORIZED, message: 'JWT malformed' });
  }
};
