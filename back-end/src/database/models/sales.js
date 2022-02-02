const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales',
  {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    timestamps: true,
    tableName: 'sales',
    underscored: true,
    updatedAt: false,
    createdAt: 'saleDate',
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'user_id', as: 'User' });
  };

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'seller_id', as: 'Seller' });
  };

  Sales.associate = (models) => {
    Sales.hasMany(models.SalesProducts,
      { foreignKey: 'sale_id', as: 'salesProducts' });
  };

  return Sales;
};

module.exports = Sales;
