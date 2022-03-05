module.exports = (sequelize, dataTypes) => {
  let alias = "Categorie";
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
  };
  let config = {
    tableName: "categories",
    timestamps: false,
  };
  const Categorie = sequelize.define(alias, cols, config);

  return Categorie;
};
