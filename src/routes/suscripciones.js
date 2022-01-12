const main = require('../Controllers/suscripciones');
const express = require('express');
const router = express.Router();
router.get('/suscripciones', main.suscripciones)

module.exports = router