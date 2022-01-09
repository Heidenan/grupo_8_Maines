const main = require('../Controllers/ayuda');
const express = require('express');
const router = express.Router();
router.get('/ayuda', main.ayuda)

module.exports = router