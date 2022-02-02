const getSalesService = require('../../services/sales/getSales');
const getSalesById = require('../../services/sales/getSalesById');

const NOT_FOUND = 404;

const getSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    let sales = {};
    
    if (id) {
      sales = await getSalesById(id);
    } else {
      const { role, email } = JSON.parse(req.headers.data);
      sales = await getSalesService(role, email);
    }

    if (!sales) return next({ code: NOT_FOUND, message: 'No order registered' });

    return res.status(200).json(sales);
  } catch (e) {
      next(e);
  }
};

module.exports = getSales;
