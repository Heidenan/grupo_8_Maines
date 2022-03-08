const validator = require("express-validator");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const userController = {
  index: (req, res) => res.send(user.all()),
  register: (req, res) =>
    res.render("users/register", {
      styles: ["/register"],
    }),
  login: (req, res) =>
    res.render("users/login", {
      styles: ["/login"],
    }),
  profile: (req, res) => {
    res.render("users/profile");
  },
  show: (req, res) => {
    let result = user.show(req.params.id);
    return result ? res.send(result) : res.send("User not found");
  },
  access: (req, res) => {
    let errors = validator.validationResult(req);
    // Here we store the errors in a variable
    if (!errors.isEmpty()) {
      return res.render("users/login", {
        errors: errors.mapped(),
      });
    }
    let exist = user.search("email", req.body.email);
    if (!exist) {
      return res.render("users/login", {
        errors: {
          email: {
            msg: "El email no esta registrado",
          },
        },
      });
    }
    if (!bcrypt.compareSync(req.body.password, exist.password)) {
      return res.render("users/login", {
        errors: {
          password: {
            msg: "Contraseña invalida",
          },
        },
      });
    }
    if (req.body.remember) {
      res.cookie("user", req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 });
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
            msg: "El email ya se encuentra registrado",
          },
        },
      });
    }

    req.body.avatar = req.file ? req.file.filename : null;
    let userRegistered = user.create(req.body);
    console.log(userRegistered);

    return res.redirect("/users/login");
  },
  logout: (req, res) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/");
  },
  suscripciones: (req, res) => res.render("users/suscripciones"),
  uploadAvatar: (req, res) => {
    let update = user.update(req.session.user.id, {
      avatar: req.files ? req.files[0].filename : null,
    });
    req.session.user = update;
    return res.redirect("/users/profile");
  },
};

module.exports = userController;
