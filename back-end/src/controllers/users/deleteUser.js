const service = require('../../services/users/userService');

const deleteUser = async (req, res, next) => {
  try {
    await service.deleteUser(req.body.id);
    return res.status(201).json({ message: 'User Deleted' });
  } catch (e) {
      next(e);
  }
};

module.exports = deleteUser;
