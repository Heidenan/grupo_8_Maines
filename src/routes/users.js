const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();
const saveUser = require("../middlewares/saveUser");
const access = require("../middlewares/access");
const auth = require("../middlewares/auth");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.join(__dirname, "../../uploads", "avatars")),
  filename: (req, file, cb) =>
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ),
});
const upload = multer({ storage: storage });

router.get("/list", [auth], userController.index);
router.get("/register", userController.register);
router.get("/login", userController.login);
router.get("/logout", [access], userController.logout);
router.get("/profile", [access], userController.profile);
router.get("/update/:id", [auth], userController.show);

router.post("/save", [upload.any(), saveUser], userController.save);
router.post("/access", userController.access);
router.post(
  "/upload/avatar",
  [upload.any(), access],
  userController.uploadAvatar
);

router.put("/:id", [auth, upload.any()], userController.update);
router.delete("/:id", [auth], userController.delete);

module.exports = router;
