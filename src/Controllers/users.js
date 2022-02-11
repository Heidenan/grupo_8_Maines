const validator = require("express-validator");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const userController = {
  index: (req, res) => res.send(user.all()),
  register: (req, res) =>
    res.render("users/register", {
      styles: ["/register"],
    }),
  login: (req, res) => res.render("users/login"),
  profile: (req, res) => res.render("users/profile"),
  show: (req, res) => {
    let result = user.show(req.params.id);
    return result ? res.send(result) : res.send("User not found");
  },
  access: (req, res) => {
    let errors = validator.validationResult(req);
    // Here we store the errors in a variable
    if (!errors.isEmpty()) {
      return res.render("users/register", {
        errors: errors.mapped(),
      });
    }
    let exist = user.search("email", req.body.email);
    if (!exist) {
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Email is not registered",
          },
        },
      });
    }
    if (!bcrypt.compareSync(req.body.password, exist.password)) {
      return res.render("users/login", {
        errors: {
          password: {
            msg: "Password is not valid",
          },
        },
      });
    }
    if (req.body.remember) {
      res.cookie("email", req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 });
      // This cookie expires in 1 month --> Every cookie is calculated in milliseconds
    }
    req.session.user = exist;
    return res.redirect("/users/profile");
    // This is to verify that there is a user in session
  },
  create: (req, res) => {
    let errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/register", {
        errors: errors.mapped(),
      });
    }
    let exist = user.search("email", req.body.email);
    if (exist) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Email is registered",
          },
        },
      });
    }
    let userRegistered = user.create(req.body);
    return res.send({
      data: req.body,
      user: userRegistered,
      msg: "LLego del register",
    });
  },
  logout: (req, res) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/users/login");
  },
  suscripciones: (req, res) => res.render("users/suscripciones"),
};
module.exports = userController;
