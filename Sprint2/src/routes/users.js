const express =require('express');
const controller = require('../controllers/users');
const router = express.Router()

router.get('/usuarios', controller.index)
router.get('/usuarios/:id', controller.show)

module.exports = router