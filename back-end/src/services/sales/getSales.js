const { Sales, Users } = require('../../database/models');

const getSales = {
  customer: (id) => Sales.findAll({ where: { userId: id } }),
  seller: (id) => Sales.findAll({ where: { sellerId: id } }),
  administrator: (_id) => Sales.findAll(),
};

module.exports = async (role, email) => {
  const { id } = await Users.findOne({ where: { email } });

  const sales = await getSales[role](id);

  return sales;
};
