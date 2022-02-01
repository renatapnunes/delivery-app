const jwt = require('jsonwebtoken');

const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' })
  .trim();

const UNAUTHORIZED = 401;

module.exports = (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    console.log(req.headers);

    if (!token) return next({ code: UNAUTHORIZED, message: 'Missing auth token' });

    const decoded = jwt.verify(token, jwtKey);
    if (!decoded) return next({ code: UNAUTHORIZED, message: 'JWT malformed' });

    const user = decoded.data;
    req.user = user;

    next();
  } catch (err) {
    next({ code: UNAUTHORIZED, message: 'JWT malformed' });
  }
};
