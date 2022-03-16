const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();
const saveUser = require("../middlewares/saveUser");
const access = require("../middlewares/access");
const auth = require("../middlewares/auth");
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

router.get("/list", userController.index);
router.get("/register", userController.register);
router.get("/login", userController.login);
router.get("/logout", [access], userController.logout);
router.get("/profile", [access], userController.profile);
router.post("/save", [saveUser, upload.any()], userController.save);
router.post("/access", userController.access);

router.get("/update/:id", userController.show);
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router;
