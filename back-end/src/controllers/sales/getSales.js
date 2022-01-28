const getAllSales = require('../../services/sales/getSales');

const getSales = async (_req, res, next) => {
  try {
    const sales = await getAllSales();
    return res.status(200).json(sales);
  } catch (e) {
      next(e);
  }
};

module.exports = getSales;
