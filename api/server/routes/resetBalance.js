const express = require('express');
const router = express.Router();
const controller = require('../controllers/ResetBalanceController');
const { requireJwtAuth } = require('../middleware/');

router.put('/',  controller);

module.exports = router
