const validator = require("express-validator");
const mimeTypes = ["image/jpeg", "image/gif", "image/png"];
const validations = [
  // Here we make the validations in order to create a new user
  validator
    .body("name")
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener 5 caracteres mínimo"),
  validator
    .body("description")
    .isLength({ min: 20 })
    .withMessage("La descripcion debe tener mínimo 20 caracteres"),
  validator
    .check("image")
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
