const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.getProducts);
router.get('/search', mainController.getSearchProducts);

module.exports = router;