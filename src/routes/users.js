const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();
const create = require("../middlewares/create");
const access = require("../middlewares/access");
const auth = require("../middlewares/access");

router.get("/usuarios", [auth], userController.index);
router.get("/register", userController.register);
router.get("/login", userController.login);
router.get("/logout", [access], userController.logout);
router.get("/suscripciones", userController.suscripciones);
router.get("/profile", [access], userController.profile);
router.get("/usuarios/:id", userController.show);
router.post("/", [create], userController.create);
router.post("/access", userController.access);

module.exports = router;
