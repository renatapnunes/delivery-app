const { Users } = require('../../database/models');

const getAllSellers = async () => {
  const sellers = await Users.findAll({ 
    where: { role: 'seller' },
    attributes: ['name', 'id'] });

  return sellers;
};

module.exports = getAllSellers;
