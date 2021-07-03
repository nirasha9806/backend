const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {ApprovedResearcher} = require("../models/approvedResearches-model");

//post method to save data
router.post("/insertApprovedResearcher", (req, res) => {

    //save data got from the client into the ApprovedResearcher collection in the DB
    const approvedResearches = new ApprovedResearcher(req.body)

    approvedResearches.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

module.exports = router;