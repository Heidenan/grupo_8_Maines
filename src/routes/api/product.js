const express = require("express");
const router = express.Router();
const products = require("../../controllers/api/product");

router.get("/", products.list);
router.get("/:id", products.show);

module.exports = router;
