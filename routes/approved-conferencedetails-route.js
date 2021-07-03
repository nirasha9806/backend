const express = require('express');
const router = express.Router();
const GetController = require('../controllers/approved-conferencedetails-controller');

router.get('/',GetController.GetDetails);
router.post('/delete/:id',GetController.DeleteDetails);


module.exports = router;