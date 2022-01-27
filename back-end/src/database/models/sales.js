const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales',
  {
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    timestamps: false,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'user_id', as: 'User' });
  };

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'seller_id', as: 'Seller' });
  };

  return Sales;
};

module.exports = Sales;