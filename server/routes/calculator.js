const express = require('express');
const router = express.Router();

const {PENCalculator} = require('../controllers/CalculatorController');

router.post("/atom", PENCalculator);

module.exports = router;