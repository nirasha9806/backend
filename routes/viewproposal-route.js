const express = require('express');
const router = express.Router();
const ProposalController = require('../controllers/viewproposal-controller');

router.get('/',ProposalController.GetproposalDetails);




module.exports = router;