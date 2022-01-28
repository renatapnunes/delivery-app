const User = (sequelize, DataTypes) => {
  const user = sequelize.define('Users', 
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: "users"
  });

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'user_id', as: 'Sales' });
  };

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'seller_id', as: 'Seller' });
  };

  return user;
};

module.exports = User;
