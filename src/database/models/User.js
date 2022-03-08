module.exports = (sequelize, dataTypes) => {
  let alias = "User";
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
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    isAdmin: {
      type: dataTypes.BOOLEAN,
    },
    isActive: {
      type: dataTypes.BOOLEAN,
    },
    avatar: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, cols, config);

  return User;
};
