const validator = require("express-validator");
const user = require("../models/user");
const db = require("../database/models");
const Users = db.User;
const validations = [
  // Here we make the validations in order to create a new user
  validator
    .body("name")
    .isLength({ min: 2 })
    .withMessage("El nombre es muy corto"),
  validator
    .body("last_name")
    .isLength({ min: 2 })
    .withMessage("El apellido es muy corto"),
  validator.body("email").isEmail().withMessage("Email invalido"),
  /*.custom((value) => {
      let search = user.search("email", value);
      return search
        ? Promise.reject("El email ya fue registrado")
        : Promise.resolve();
    }) */
  validator
    .body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener 8 caracteres mínimo")
    .matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
    .withMessage("La contraseña debe incluir una letra y un caracter especial"),
  validator
    .body("avatar")
    .matches(/"image\/(jpeg|png|gif|jpg)"/)
    .withMessage("El archivo debe ser .jpeg, .png, .gif o .jpg"),
];

module.exports = validations;
