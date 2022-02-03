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
};
module.exports = controller;
