const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');
const mainController = require('../controllers/mainController.js');

const validAvenger=[
    body('name').trim().notEmpty(),
    body('power').trim().notEmpty(),
    body('age').trim().notEmpty().isInt({gt:0})
]

router.get('/', mainController.renderer);
router.get('/api',mainController.serveData);
router.post('/api', validAvenger, mainController.updateData);

module.exports = router;