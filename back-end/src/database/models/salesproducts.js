const salesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('SalesProducts',
    {
      quantity: DataTypes.INTEGER,
    }, 
    { 
      timestamps: false 
    });
  
  salesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'Sales',
      through: salesProducts,
      foreignKey: 'sale_id', 
      otherKey: 'product_id',
    });

    models.Sales.belongsToMany(models.Products, {
      as: 'Products',
      through: salesProducts,
      foreignKey: 'product_id', 
      otherKey: 'sale_id',
    });
  };

  return salesProducts;
}

module.exports = salesProducts;