const validator = require("express-validator");
const bcrypt = require("bcrypt");
const db = require("../database/models");

const Users = db.User;
const userController = {
  // Views
  index: (req, res) => {
    Users.findAll()
      .then((users) => {
        res.render("users/list",{ users });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  register: (req, res) =>
    res.render("users/register", {
      styles: ["/register"],
    }),
  login: (req, res) =>
    res.render("users/login", {
      styles: ["/login"],
    }),
  profile: (req, res) => {
    //res.render("users/profile");
    Users.findByPk(req.session.user.id)
      .then(() => {
        res.render("users/profile");
      })
      .catch((error) => res.send(error));
  },
  suscripciones: (req, res) => res.render("users/suscripciones"),

  // CRUD
  save: (req, res) => {
    // Create user with DB
    const errors = validator.validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.render("users/register", {
        errors: errors.mapped(),
      });
    }
    Users.findOne({ where: { email: req.body.email } })
      .then((userFound) => {
        if (!userFound) {
          Users.create({
            name: req.body.name,
            last_name: req.body.last_name,
            email: String(req.body.email),
            userName: req.body.userName,
            password: bcrypt.hashSync(req.body.password, 10),
            isAdmin: String(req.body.email).includes("@maines.com"),
            isActive: true,
            avatar: req.files[0].filename,
          }).then(() => res.render("users/login",{
            styles: ["/login"]
          }))
        } else {
          res.render("users/register", {
            errors: {
              email: {
                msg: "Ese mail ya está en uso",
              },
            },
          });
        }
      })
      .catch((error) => res.send(error));

  },
  access: (req, res) => {
    // Login with DB
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        let errors = validator.validationResult(req);

        if (!errors.isEmpty()) {
          res.render("users/login", {
            errors: errors.mapped(),
          });
        }
        if (!user) {
          return res.render("users/login", {
            styles: ["/login"],
            errors: {
              email: {
                msg: "Email sin registrar",
              },
            },
          });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
          return res.render("users/login", {
            styles: ["/login"],
            errors: {
              password: {
                msg: "Contraseña invalida",
              },
            },
          });
        } else {
          if (req.body.remember) {
            res.cookie("email", req.body.email, {
              maxAge: 1000 * 60 * 60 * 24 * 30,
            });
          }
          req.session.user = user;
          return res.redirect("/users/profile");
        }
      })

      .catch((error) => res.send(error));

 
  },
  logout: (req, res) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/");
  },

  update: (req, res) => {
    //Update
    Users.update(
      {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((user) => {
        res.redirect("./list");
      })
      .catch((error) => res.send(error));
  },

  show: (req, res) => {
    Users.findByPk(req.params.id)
      .then((user) => {
        res.render("users/update", { user });
      })
      .catch((error) => res.send(error));
  },

  delete: (req, res) => {
    // Tengo que buscar el usuario a borrar.. una vez encontrado el usuario debo borrarlo.//
    Users.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.redirect("./list");
      })
      .catch((error) => res.send(error));
  },

  updateAvatar: (req,res) => {

      Users.update(

        {
          avatar: req.files[0].filename
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then((user) => {
          res.redirect("/profile", {styles: ["/profile"]});
        })
        .catch((error) => res.send(error));
    },
};


module.exports = userController;
