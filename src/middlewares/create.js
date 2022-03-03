const validator = require("express-validator");
const user = require("../models/user");
const validations = [
  validator
    .body("email")
    .isEmail()
    .withMessage("Email invalido")
    .custom((value) => {
      // Here we create a custom validation
      let search = user.search("email", value);
      return search ? Promise.reject("El email ya existe") : Promise.resolve();
      // Promise is a method we can use to return something to the validations
    }),
  validator
    .body("password")
    .isLength({ min: 5 })
    .withMessage("La contraseña debe tener 6 caracteres mínimo")
    .matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
    .withMessage("La contraseña debe incluir una letra y un caracter especial"),

  // Here we make the validations in order to create a new user
];

module.exports = validations;
