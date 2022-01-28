const { Sales } = require('../../database/models');
const salesSchema = require('../../schemas/salesSchema');

const saleValidation = (salesData) => {
  const { error } = salesSchema.validate(salesData);
  if (error) return { error };
};

module.exports = async (salesData, id) => {
  saleValidation(salesData);

  const sales = await Sales.create({ ...salesData, userId: id });

  return sales;
};
