const main = require('../Controllers/entregas');
const express = require('express');
const router = express.Router();
router.get('/entregas', main.entregas)

module.exports = router