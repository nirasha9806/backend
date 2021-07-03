const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {ApprovedProposals} = require("../models/approvedProposals-model");

//post method to save data
router.post("/insertApprovedProposals", (req, res) => {

    //save data got from the client into the ApprovedProposals collection in the DB
    const approvedProposals = new ApprovedProposals(req.body)

    approvedProposals.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

module.exports = router;