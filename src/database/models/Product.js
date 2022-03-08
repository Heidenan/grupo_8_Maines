module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
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
    offert: {
      type: dataTypes.BOOLEAN,
    },
    image: {
      type: dataTypes.STRING,
    },
    discount: {
      type: dataTypes.INTEGER,
    },
    discountValue: {
      type: dataTypes.INTEGER,
    },
    category_id: {
      type: dataTypes.INTEGER,
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
      foreignKey: "category_id",
    });
  };

  return Product;
};
