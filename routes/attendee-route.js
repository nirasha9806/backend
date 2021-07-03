const express = require('express');
const router = express.Router();
const attendeeController = require('../controllers/attendee-controller');

router.post('/signup', attendeeController.SignUp);

module.exports = router;