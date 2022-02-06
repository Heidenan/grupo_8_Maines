const path = require("path");
const fs = require("fs");
// fs allows us to read and write files
const bcrypt = require("bcrypt");
const { body } = require("express-validator");
const model = {
  file: path.resolve(__dirname, "../data", "users.json"),
  read: () => fs.readFileSync(model.file, "utf8"),
  write: (data) => fs.writeFileSync(model.file, JSON.stringify(data, null, 2)),
  listAllUsers: () => JSON.parse(model.read()),
  show: (id) => model.list().find((e) => e.id == id),
  search: (prop, value) =>
    model.all().find((element) => element[prop] == value),
  generated: (data) =>
    // Here we generate a new user
    Object({
      id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
      email: String(data.email),
      password: bcrypt.hashSync(data.password, 10),
      // bcrypt takes the password, calculates a hash verification and encripts it
      isAdmin: String(data.email).includes("@maines.com"),
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
  validate: [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").isLength({ min: 5 }).withMessage("Password is too short"),
    // Through express-validator, we validate the email and password
  ],
};

module.exports = model;
