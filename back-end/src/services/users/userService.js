const { Users } = require('../../database/models');

const getAllUsers = () => Users.findAll();
const findUser = (email) => Users.findOne({ where: { email } });
const createUser = (data) => Users.create({ ...data });
const findUserByNameEmail = (name, email) => Users.findOne({ where: { name, email } });
const deleteUser = (id) => Users.destroy({ where: { id } });

module.exports = {
  findUser,
  createUser,
  findUserByNameEmail,
  getAllUsers,
  deleteUser,
};
