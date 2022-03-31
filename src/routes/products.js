const { Router } = require("express");
const router = Router();
const saveProduct = require("../middlewares/saveProduct");
const product = require("../Controllers/products");
const path = require("path");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) =>
      cb(null, path.resolve(__dirname, "../../uploads")),
    filename: (req, file, cb) =>
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      ),
  }),
});

// Acá no ejecutamos express pq las rutas no ejecutan express.
// En las rutas ejecutamos un router.

router.get("/", product.index); // 1 de 7 del listado del Sprint4
router.get("/create", product.create); // 2 de 7 del listado del Sprint4
router.get("/:id", product.show); // 3 de 7 del listado del Sprint4
router.get("/update/:id", product.edit); // 4 de 7 del listado del Sprint4 O sea este es /edit en ese formulario
router.get("/carrito", product.carrito);
router.get("/compras", product.compras);

router.post("/", [upload.any(), saveProduct], product.save);

router.put("/:id", product.update); // 6 de 7 del listado del Sprint4

router.delete("/:id", product.destroy); // 7 de 7 del listado del Sprint4

module.exports = router;

/* const controller = require('../Controllers/products');
const express = require('express');
const router = express.Router();

router.get('/products', controller.index)
router.get('/productos/crear', controller.create)
router.post('/productos/guardar', controller.save)

module.exports = router
*/
