const insert = require('../../services/sales/insertSales');

const insertSales = async (req, res, next) => {
  try {
    const salesData = req.body;
    const { _id } = req.user;
    const sales = await insert(salesData, _id);
    return res.status(200).json(sales);
  } catch (e) {
      next(e);
  }
};

module.exports = insertSales;
