const main = require('../Controllers/productDetail');
const express = require('express');
const router = express.Router();
router.get('/detalleProducto', main.productDetail)

module.exports = router