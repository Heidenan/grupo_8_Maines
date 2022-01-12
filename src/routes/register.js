const main = require('../Controllers/register');
const express = require('express');
const router = express.Router();
router.get('/register', main.register)

module.exports = router