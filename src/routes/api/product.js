const express = require("express");
const router = express.Router();
const products = require("../../controllers/api/product");

router.get("/products", products.list);
router.get("/products/:id", products.show);

module.exports = router;
