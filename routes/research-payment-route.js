const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/research-payment-controller');

router.post('/add',paymentController.AddPayment);




module.exports = router;