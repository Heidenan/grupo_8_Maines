const controller = require('../Controllers/products');
const express = require('express');
const router = express.Router();

router.get('/products', controller.index)
router.get('/productos/crear', controller.create)
router.post('/productos/guardar', controller.save)

module.exports = router