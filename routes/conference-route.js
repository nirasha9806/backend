const express=require('express');
const conferenceRoutes=express.Router();
let {Conference}= require('../models/conference-model');

//store
conferenceRoutes.route('/add').post(function(req,res){
    let conference=new Conference(req.body);
    conference.save()
    .then(conference=>{
        res.status(200).json({'conference': 'conference is added succesfully'});
    })
    .catch(err=>{
        res.status(400).send("unable to save database");
    });
});

//get data

conferenceRoutes.route('/').get(function(req,res){
    Conference.find(function(err,conference){
        if(err)
         console.log(err);
        else{
            res.json(conference);
        } 
    });
});

//edit 

conferenceRoutes.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Conference.findById(id,function(err,conference){
        res.json(conference);
    });
});

//update

conferenceRoutes.route('/update/:id').post(function(req,res){
    Conference.findById(req.params.id,function(err,conference){
        if(!conference)
            res.status(404).send("data is not found");
        else{
            conference.research_name=req.body.research_name;
            conference.author_name=req.body.author_name;
            conference.research_type=req.body.research_type;

            conference.save().then(conference=>{
                res.json('Update complete');
            })
            .catch(err=>{
                res.status(400).send("unable to update database ");
            });
        }    
    });
});

//delete 

conferenceRoutes.route('/delete/:id').get(function(req,res){
    Conference.findByIdAndRemove({_id:req.params.id},function(err,conference){
        if(err)res.json(err);
        else res.json("successfully removed");
    });
});

module.exports = conferenceRoutes;