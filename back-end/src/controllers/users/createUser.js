const md5 = require('md5');
const service = require('../../services/users/userService');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userAlredyExists = await service.findUserByNameEmail(name, email);
    if (userAlredyExists) return res.status(409).json({ message: 'Conflict' });
    await service.createUser({ name, email, password: md5(password) });
    return res.status(201).json({ message: 'Created' });
  } catch (e) {
      next(e);
  }
};

module.exports = createUser;
