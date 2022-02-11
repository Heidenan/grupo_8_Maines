const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();
const access = require("../middlewares/access");
const auth = require("../middlewares/access");
const { validate } = require("../models/user");

router.get("/usuarios", [auth], userController.index);
router.get("/register", userController.register);
router.get("/login", userController.login);
router.get("/logout", [], userController.logout);
router.get("/suscripciones", userController.suscripciones);
router.post("/", [validate], userController.create);
router.get("/profile", [access], userController.profile);
router.get("/usuarios/:id", userController.show);
router.post("/access", [validate], userController.access);

module.exports = router;
