const express = require("express");
const controller = require("../controllers/users");
const router = express.Router();
const access = require("../middlewares/access");
const auth = require("../middlewares/access");
const { validate } = require("../models/user");

router.get("/usuarios", [auth], controller.index);
router.get("/register", controller.register);
router.get("/login", controller.login);
router.post("/logout", controller.logout);
router.get("/suscripciones", controller.suscripciones);
router.post("/", [validate], controller.create);
router.get("/profile", [access], controller.profile);
router.get("/usuarios/:id", controller.show);
router.post("/access", [validate], controller.access);



module.exports = router;
