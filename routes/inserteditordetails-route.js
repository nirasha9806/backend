const express = require('express');
const router = express.Router();
const InsertController = require('../controllers/inserteditordetails-controller');


//post method to save data
router.post("/add",InsertController.AddDetails );
module.exports = router;