const express = require("express");
const router = express.Router();
const user = require("../../controllers/api/user");

/* router.get("/users", user.list);
router.get("/users/:id", user.show); */
router.get("/users", user.list);

module.exports = router;
