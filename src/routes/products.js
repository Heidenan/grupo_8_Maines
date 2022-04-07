const { Router } = require("express");
const router = Router();
const saveProduct = require("../middlewares/saveProduct");
const product = require("../Controllers/products");
const path = require("path");
const auth = require("../middlewares/auth");
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

router.get("/", product.index);
router.get("/create", [auth], product.create);
router.get("/update/:id",[auth], product.edit);
router.get("/carrito", product.carrito);
router.get("/compras", product.compras);
router.get("/:id", product.show);
router.get("/carrito/:id", product.carrito);
router.post("/", [upload.any(), saveProduct], product.save);

router.put("/:id", product.update);

router.delete("/:id", product.destroy);

module.exports = router;
