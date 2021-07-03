const express = require('express');
const router = express.Router();
const PaperController = require('../controllers/viewresearchpaper-controller');

router.get('/',PaperController.GetReseracherDetails);




module.exports = router;