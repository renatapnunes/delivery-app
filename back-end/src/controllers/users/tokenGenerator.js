const jwt = require('jsonwebtoken');
const md5 = require('md5');
const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const tokenGenerator = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const criptedPass = md5(password);
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign({ data: email, criptedPass }, jwtKey, jwtConfig);
    return res.json(token);
  } catch (e) {
      next(e);
  }
};

module.exports = tokenGenerator;
