const validator = require("express-validator");
const bcrypt = require("bcrypt");
const users = require("../models/user");
const db = require("../database/models");

const Users = db.User;
const userController = {
  index: (req, res) => res.send(users.all()),
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
  // show: (req, res) => {
  //   let result = user.show(req.params.id);
  //   return result ? res.send(result) : res.send("User not found");
  // },
  access: (req, res) => {
    let errors = validator.validationResult(req);
    // Here we store the errors in a variable
    if (!errors.isEmpty()) {
      return res.render("users/login", {
        errors: errors.mapped(),
      });
    }
    let exist = users.search("email", req.body.email);
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
  // create: (req, res) => {
  //   let errors = validator.validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.render("users/register", {
  //       errors: errors.mapped(),
  //     });
  //   }
  //   let exist = users.search("email", req.body.email);
  //   if (exist) {
  //     return res.render("users/register", {
  //       errors: {
  //         email: {
  //           msg: "El email ya se encuentra registrado",
  //         },
  //       },
  //     });
  //   }

  //   req.body.avatar = req.file ? req.file.filename : null;
  //   let userRegistered = users.create(req.body);
  //   console.log(userRegistered);

  //   return res.redirect("/users/login");
  // },
  logout: (req, res) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/");
  },
  suscripciones: (req, res) => res.render("users/suscripciones"),
  uploadAvatar: (req, res) => {
    let update = users.update(req.session.user.id, {
      avatar: req.files ? req.files[0].filename : null,
    });
    req.session.user = update;
    return res.redirect("/users/profile");
  },

  // CRUD

  save: (req, res) => {
    // Create
    const errors = validator.validationResult(req)
    if (!errors.isEmpty()) {
      return res.render('users/register', {
        errors: errors.mapped(),
      })
    }
    Users.findOne({ where: { email: req.body.email } })
      .then(userFound => {
        if (!userFound) {
          Users.create({
            name: req.body.name,
            last_name: req.body.last_name,
            email: String(req.body.email),
            userName: req.body.userName,
            password: bcrypt.hashSync(req.body.password, 10),
            isAdmin: String(req.body.email).includes('@maines.com'),
            isActive: true,
            avatar: req.body.avatar ? req.body.avatar : null,
          }).then(() => res.render('users/login'))
        } else {
          res.render('users/register', {
            errors: {
              email: {
                msg: 'Ese mail ya está en uso',
              },
            },
          })
        }
      })
      .catch(error => res.send(error))
  },
  show: (req, res) => {
    // Read
    let result = Users.findByPk(req.session.user)
      .then(() => {
        res.send(result);
      })
      .catch((error) => res.send(error));
  },

  update: (req, res) => {
    //Update
    Users.update(
      {
        avatar: req.file,
      },
      {
        where: {
          id: req.session.user.id,
        },
      }
    ).then(() => {
      res.send(req.body);
    });
  },

  // delete: (req, res) => { // delete

  // }
};

module.exports = userController;
