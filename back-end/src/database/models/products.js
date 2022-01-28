const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products',
  {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING(200),
  },
  {
    timestamps: false,
    underscored: true,
    tableName: "products"
  });

  return Products;
};

module.exports = Products;
