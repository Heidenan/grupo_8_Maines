const user = require("../models/user");
const controller = {
  index: (req, res) => res.send(user.list()),
  register: (req, res) =>
    res.render("users/register", {
      styles: ["/register"],
    }),
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
};
module.exports = controller;
