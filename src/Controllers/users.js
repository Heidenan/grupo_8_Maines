const user = require("../models/user");
const controller = {
  index: (req, res) => res.send(user.listAllUsers()),
  register: (req, res) =>
    res.render("users/register", {
      styles: ["/register"],
    }),
  login: (req, res) => res.render("users/login"),
  show: (req, res) => {
    let result = user.show(req.params.id);
    return result ? res.send(result) : res.send("User not found");
  },
  create: (req, res) => {
    console.log("asd", req.body);
    let userRegistered = user.create(req.body);
    return res.send({
      data: req.body,
      user: userRegistered,
      msg: "LLego del register",
    });
  },
  suscripciones: (req, res) => res.render("users/suscripciones"),
};
module.exports = controller;
