module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: dataTypes.BIGINT,
      allowNull: false,
    },
    offer: {
      type: dataTypes.BOOLEAN,
    },
    image: {
      type: dataTypes.STRING,
    },
    discount: {
      type: dataTypes.INTEGER(11),
    },
    discountValue: {
      type: dataTypes.INTEGER(11),
    },
    categoryId: {
      type: dataTypes.INTEGER(11),
    },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      as: "category",
      foreignKey: "categoryId",
    });
  };

  return Product;
};
