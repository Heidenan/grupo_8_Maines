const {Router} = require('express');
const router = Router();
const {index} = require('../controllers/main');

router.get('/', index)

/*
const main = require('../Controllers/main');
const express = require('express');
const router = express.Router();

router.get('/', main.index)
*/
module.exports = router

