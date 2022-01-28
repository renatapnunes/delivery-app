const { Sales } = require('../../database/models');

module.exports = async () => {
  const sales = await Sales.findAll();
  return sales;
};