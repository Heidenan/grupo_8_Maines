const validator = require("express-validator");
const user = require("../models/user");
const validations = [
  validator
    .body("email")
    .isEmail()
    .withMessage("Invalid email")
    .custom((value) => {
      // Here we create a custom validation
      let search = user.search("email", value);
      return search
        ? Promise.reject("Email already exists")
        : Promise.resolve();
      // Promise is a method we can use to return something to the validations
    }),
  validator
    .body("password")
    .isLength({ min: 5 })
    .withMessage("Password must have 6 characters minimum")
    .matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
    .withMessage(
      "Password must have 6 characters minimum, include a letter, a special character and a number"
    ),

  // Here we make the validations in order to create a new user
];

module.exports = validations;
