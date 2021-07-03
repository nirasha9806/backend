const express=require('express');
const fetchdataRoutes=express.Router();
let {Fetch}= require('../models/conference-model');

fetchdataRoutes.route('/').get(function(req,res){
    Fetch.find(function(err,conference){
        if(err)
         console.log(err);
        else{
            res.json(conference);
        } 
    });
});
module.exports = fetchdataRoutes;