const express = require('express');
const router = express.Router();
const researcherController = require('../controllers/researcher-controller');

router.post('/signup', researcherController.SignUp);

module.exports = router;