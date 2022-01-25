const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', 
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return user;
};

module.exports = User;