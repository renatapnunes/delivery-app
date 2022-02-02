const { Sales, SalesProducts, Products } = require('../../database/models');

module.exports = async (id) => {
  const saleProducts = await Sales.findOne(
      {
        where: { id },
        include: [
          { model: SalesProducts, as: 'salesProducts' },
          { model: Products, as: 'Products' },
        ],
      },
    );

  return saleProducts;
};
