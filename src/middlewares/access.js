module.exports = (req, res, next) =>
  req.session && req.session.user ? next() : res.redirect("/users/login");

// Here we check if who is trying to access the page is a user
