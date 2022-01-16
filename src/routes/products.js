const {Router} = require('express');
const router = Router();
const multer = require('multer');
const product = require('../Controllers/products');

// Acá no ejecutamos express pq las rutas no ejecutan express. 
// En las rutas ejecutamos un router.

router.get('/', product.index) // 1 de 7 del listado del Sprint4
router.get('/create', product.create) // 2 de 7 del listado del Sprint4
router.get('/:id',product.show) // 3 de 7 del listado del Sprint4
router.get('/update/:id', product.update) // 4 de 7 del listado del Sprint4 O sea este es /edit en ese formulario

router.put('/:id',product.modify) // 6 de 7 del listado del Sprint4

router.post('/', product.save) // 5 de 7 del listado del Sprint4

router.delete('/',product.delete)

module.exports = router



/* const controller = require('../Controllers/products');
const express = require('express');
const router = express.Router();

router.get('/products', controller.index)
router.get('/productos/crear', controller.create)
router.post('/productos/guardar', controller.save)

module.exports = router
*/