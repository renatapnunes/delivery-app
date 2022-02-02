const { Sales, Users } = require('../../database/models');
const salesSchema = require('../../schemas/salesSchema');

const saleValidation = (salesData) => {
  const { error } = salesSchema.validate(salesData);
  if (error) return { error };
};

module.exports = async ({ email, values, products }) => {
  saleValidation(values);
  const { id } = await Users.findOne({ where: { email } });
  const sales = await Sales.create({ ...values, userId: id });
  products.map(async ({ id: productId, quantity }) => 
    (sales.addProduct(productId, { through: { quantity } })));

  return sales;
};
