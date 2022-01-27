const getAllProducts = require('../../services/products/getProducts');

const getProducts = async (req, res, next) => {
  try {
    const getAll = await getAllProducts();
    return res.status(200).json(getAll);
  } catch (e) {
      next(e);
  }
};

module.exports = getProducts;