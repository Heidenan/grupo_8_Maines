const express = require("express");
const router = express.Router();
const user = require("../../controllers/api/product");

router.get("/", user.list);
router.get("/:id", user.show);

module.exports = router;
