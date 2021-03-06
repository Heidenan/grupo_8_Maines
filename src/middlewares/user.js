// This is an app's middleware, not a route's middleware. To use this one we have to require it in the entry point of the app.
const user = require("../models/user");
const db = require("../database/models");
const middleware = (req, res, next) => {
  let logged = null;
  if (req.cookies && req.cookies.user) {
    db.User.findOne({ where: { email: req.cookie.email } }).then((response) => {
      req.session.user = response;
    });
    // logged = user.search("email", req.cookies.user);
    // req.session.user = logged;
  }
  if (req.session && req.session.user) {
    logged = req.session.user;
  }
  res.locals.user = logged;
  // Locals is a variable that lives in (res) and it can be used everywhere in the views
  return next();
};

module.exports = middleware;
