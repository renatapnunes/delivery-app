const findUser = require('./findUser');
const createUser = require('./createUser');
const tokenGenerator = require('./tokenGenerator');
const createUserAdm = require('./createUserAdmin');
const getAllUsers = require('./getAllUsers');
const deleteUser = require('./deleteUser');

module.exports = {
  findUser,
  createUser,
  tokenGenerator,
  createUserAdm,
  getAllUsers,
  deleteUser,
};
