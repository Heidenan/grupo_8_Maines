const path = require("path");
const fs = require("fs");
// fs allows us to read and write files
const file = require("../models/file");
const bcrypt = require("bcrypt");
const { body } = require("express-validator");
const model = {
  file: path.resolve(__dirname, "../data", "users.json"),
  read: () => fs.readFileSync(model.file, "utf8"),
  write: (data) => fs.writeFileSync(model.file, JSON.stringify(data, null, 2)),
  all: () => JSON.parse(model.read()),
  show: (id) => model.all().find((e) => e.id == id),
  search: (prop, value) => model.all().find((user) => user[prop] === value),
  generated: (data) =>
    // Here we generate a new user
    Object({
      id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
      name: data.name,
      last_name: data.last_name,
      email: String(data.email),
      userName: data.userName,
      password: bcrypt.hashSync(data.password, 10),
      // bcrypt takes the password, calculates a hash verification and encripts it
      isAdmin: String(data.email).includes("@maines.com"),
      /* image: file.create(data.file).id, */
      isActive: true,
      avatar: data.avatar ? data.avatar : null,
    }),
  create: (data) => {
    let allUsers = model.all();
    console.log(data);
    let user = model.generated(data);
    allUsers.push(user);
    model.write(allUsers);
    return user;
    // Here we create the user and we add it to the current list of users
  },
  update: (id, data) => {
    const users = model.all();
    const user = model.search("id", id);
    const updates = users.map((user) =>
      user.id === id ? { ...user, ...data } : user
    );
    model.write(updates);
    return updates.find((user) => user.id === id);
  },
};

module.exports = model;


   // Login with JSON
    //   let errors = validator.validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.render("users/login", {
    //       errors: errors.mapped(),
    //     });
    //   }

    //   let exist = users.search("email", req.body.email);
    //   if (!exist) {
    //     return res.render("users/login", {
    //       errors: {
    //         email: {
    //           msg: "El email no esta registrado",
    //         },
    //       },
    //     });
    //   }

    //   if (!bcrypt.compareSync(req.body.password, exist.password)) {
    //     return res.render("users/login", {
    //       errors: {
    //         password: {
    //           msg: "Contraseña invalida",
    //         },
    //       },
    //     });
    //   }

    //   if (req.body.remember) {
    //     res.cookie("user", req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 });
    //     // This cookie expires in 1 month --> Every cookie is calculated in milliseconds
    //   }

    //   req.session.user = exist;
    //   return res.redirect("/users/profile");
    //   // },
    // },


    
  // CRUD

  //show: (req, res) => {
  // Read with DB
  // let result = Users.findByPk(req.session.user)
  // .then(() => {
  //  res.send(result);
  //  })
  // .catch((error) => res.send(error));

  // With JSON
  // show: (req, res) => {
  //   let result = user.show(req.params.id);
  //   return result ? res.send(result) : res.send("User not found");
  // },
  //},

  
    // Save user with JSON
    // save: (req, res) => {
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