const service = require('../../services/users/userService');

const findSellers = async (_req, res, next) => {
  try {
    const sellers = await service.findSellers();
    return res.status(200).json(sellers);
  } catch (e) {
      next(e);
  }
};

module.exports = findSellers;
