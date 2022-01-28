const md5 = require('md5');
const service = require('../../services/users/userService');

const findUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await service.findUser(email);
    if (!user || user.password !== md5(password)) return res.status(404).json({ message: "Not found"})
    return res.status(200).json(user);
  } catch (e) {
      next(e);
  }
};

module.exports = findUser;
