const main = require('../Controllers/carrito');
const express = require('express');
const router = express.Router();
router.get('/carrito', main.carrito)

module.exports = router