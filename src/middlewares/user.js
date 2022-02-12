const userModel = require("../models/user");
const user = (req, res, next) => {
  let user = null;
  if (req.cookie && req.cookie.email) {
    user = userModel.search("email", req.cookie.user);
    req.session.user = user;
    // Here we check is there is a cookie with an email. If there is one, we reasing the user from the cookie.
  }
  if (req.session && req.session.user) {
    user = req.session.user;
    // Then we check if there is a session with a user. If there is one, we reasing the user from the session.
  }
  res.locals.user = user;
  // This allows us to work whit the user in the views
  return next();

  // Next allows to continue the execution of the code
};
module.exports = user;
