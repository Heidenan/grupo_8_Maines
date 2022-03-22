const validator = require("express-validator");
const user = require("../models/user");
const db = require("../database/models");
const Users = db.User;
const validations = [
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
  // Here we make the validations in order to create a new user
];

module.exports = validations;
