const express = require('express');
const router = express.Router();
const workshopPresenterController = require('../controllers/workshop-controller');

router.post('/signup', workshopPresenterController.SignUp);

module.exports = router;