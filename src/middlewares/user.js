const user = require("../models/user");
const middleware = (req, res, next) => {
  let logged = null;
  if (req.cookies && req.cookies.user) {
    logged = user.search("email", req.cookies.user);
    req.session.user = logged;
  }
  if (req.session && req.session.user) {
    logged = req.session.user;
  }
  res.locals.user = logged;
  // Locals is a variable that lives in (res) and it can be used everywhere in the views
  next();
};

module.exports = middleware;
