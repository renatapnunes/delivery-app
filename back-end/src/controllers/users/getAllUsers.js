const service = require('../../services/users/userService');

const getAllUsers = async (_req, res, next) => {
  try {
    const allUsers = await service.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (e) {
      next(e);
  }
};

module.exports = getAllUsers;
