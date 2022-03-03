const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();
const create = require("../middlewares/create");
const access = require("../middlewares/access");
const auth = require("../middlewares/access");
const path = require("path");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) =>
      cb(null, path.resolve(__dirname, "../../uploads/avatars")),
    filename: (req, file, cb) =>
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      ),
  }),
});

router.get("/usuarios", [auth], userController.index);
router.get("/register", userController.register);
router.get("/login", userController.login);
router.get("/logout", [access], userController.logout);
router.get("/suscripciones", userController.suscripciones);
router.get("/profile", [access] ,userController.profile);
router.get("/usuarios/:id", userController.show);
router.post("/create", [create], userController.create);
router.post("/access", userController.access);
router.post(
  "/upload/avatar",
  [access, upload.any()],
  userController.uploadAvatar
);

module.exports = router;
