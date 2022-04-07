const express = require("express");
const router = express.Router();
const user = require("../../controllers/api/user");

router.get("/users", user.list);
router.get("/lastUser", user.lastUser);
router.get("/users/:id", user.show);

module.exports = router;