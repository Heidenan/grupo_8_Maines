const validator = require("express-validator");
const mimeTypes = ["image/jpeg", "image/gif", "image/png", "image/jpg"];
const validations = [
  // Here we make the validations in order to create a new user
  validator
    .body("name")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener 2 caracteres mínimo"),
  validator
    .body("last_name")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener 2 caracteres mínimo"),
  validator.body("email").isEmail().withMessage("Email invalido"),

  validator
    .body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener 8 caracteres mínimo")
    .matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
    .withMessage("La contraseña debe incluir una letra y un caracter especial"),

  validator
    .check("avatar")
    .custom((value, { req }) => {
      if (req.files.some((file) => mimeTypes.includes(file.mimetype))) {
        return "Imagen";
      } else {
        return false;
      }
    })
    .withMessage("Seleccionar unicamente una imagen"),
];

module.exports = validations;
