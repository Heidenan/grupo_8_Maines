const main = require('../Controllers/login');
const express = require('express');
const router = express.Router();
router.get('/login', main.login)

module.exports = router