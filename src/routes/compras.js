const main = require('../Controllers/compras');
const express = require('express');
const router = express.Router();
router.get('/compras', main.compras)

module.exports = router