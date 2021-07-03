const express=require('express');
const router=express.Router();
let {EditorDetails}= require('../models/inserteditordetails-model');

router.route('/').get(function(req,res){
    EditorDetails.find(function(err,editorDetails){
        if(err)
         console.log(err);
        else{
            res.json(editorDetails);
        } 
    });
});
module.exports = router;