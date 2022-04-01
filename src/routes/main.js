const {Router} = require('express');
const router = Router();
const mainController = require('../controllers/main');

router.get('/', mainController.index)
router.get("/about", mainController.about)
router.get("/contact",  mainController.contact)

module.exports = router

