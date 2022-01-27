const { Products } = require('../../database/models');

module.exports = async (_id) => {
  const getRecipes = await Products.findAll();
  return getRecipes;
};