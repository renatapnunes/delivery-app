const insert = require('../../services/sales/insertSales');

const insertSales = async (req, res, next) => {
  try {
    const salesData = req.body;
    const sales = await insert(salesData);
    return res.status(201).json(sales);
  } catch (e) {
      next(e);
  }
};

module.exports = insertSales;
