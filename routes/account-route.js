const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/research-payment-controller');

router.POST('/add',PaymentController.AddPayment);



module.exports = router;
