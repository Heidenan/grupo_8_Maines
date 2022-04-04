const express = require("express");
const router = express.Router();
const user = require("../../controllers/api/user");

router.get("/", user.list);
router.get("/:id", user.show);
router.get("/last", user.lastUser);

module.exports = router;
