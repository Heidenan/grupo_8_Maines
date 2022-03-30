const validator = require("express-validator");
const mimeTypes = ["image/jpeg","image/gif","image/png"]
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
  
  validator
  .body("password")
  .isLength({ min: 8 })
  .withMessage("La contraseña debe tener 8 caracteres mínimo")
  .matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
  .withMessage("La contraseña debe incluir una letra y un caracter especial"),
  
  validator.check('avatar')
  .custom((value, {req}) => {
    if(req.files.some(file => mimeTypes.includes(file.mimetype))){
      return 'Imagen'; 
    }else{
      return false; 
    }
  })
  .withMessage('Seleccionar unicamente una imagen'),
];


module.exports = validations;

