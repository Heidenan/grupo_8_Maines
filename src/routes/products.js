const {Router} = require('express');
const router = Router();
const product = require('../Controllers/products');

router.get('/', product.index)
router.get('/create', product.create)

router.get('/:id',product.show)
router.get('/update/:id', product.update)

router.put('/:id',product.modify)

router.post('/', product.save)

module.exports = router



/* const controller = require('../Controllers/products');
const express = require('express');
const router = express.Router();

router.get('/products', controller.index)
router.get('/productos/crear', controller.create)
router.post('/productos/guardar', controller.save)

module.exports = router
*/