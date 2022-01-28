const {Users} = require('../../database/models')

const findUser = (email) => Users.findOne({ where: { email }})
const createUser = (data) => Users.create({ ...data, role: "costumer"})
const findUserByNameEmail = (name, email) => Users.findOne({ where: { name, email } })

module.exports = {
  findUser,
  createUser,
  findUserByNameEmail,
}
