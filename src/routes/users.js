const express = require("express");
const controller = require("../controllers/users");
const router = express.Router();
const access = require("../middlewares/access");
const auth = require("../middlewares/access");
const { validate } = require("../models/user");

router.get("/usuarios", [auth], controller.index);
router.get("/usuarios/:id", controller.show);
router.get("/register", controller.register);
router.get("/login", controller.login);
router.get("/suscripciones", controller.suscripciones);
router.post("/", [validate], controller.create);

module.exports = router;
