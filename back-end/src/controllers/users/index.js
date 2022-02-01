const findUser = require('./findUser');
const createUser = require('./createUser');
const findSellers = require('./findSellers');
const tokenGenerator = require('./tokenGenerator');
const createUserAdm = require('./createUserAdmin');
const getAllUsers = require('./getAllUsers');
const deleteUser = require('./deleteUser');

module.exports = {
  findUser,
  createUser,
  findSellers,
  tokenGenerator,
  createUserAdm,
  getAllUsers,
  deleteUser,
};
