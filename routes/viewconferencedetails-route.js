const express = require('express');
const router = express.Router();
const RetrieveController = require('../controllers/viewconferencedetails-controller');

router.get('/',RetrieveController.AddDetails);




module.exports = router;