const express=require('express');
const router=express.Router();
let {Fetch}= require('../models/conference-model');

router.route('/').get(function(req,res){
    Fetch.find(function(err,conference){
        if(err)
         console.log(err);
        else{
            res.json(conference);
        } 
    });
});
module.exports = router;