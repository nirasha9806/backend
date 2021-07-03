const {ApprovedResearcher}= require('../models/approvedResearches-model');


const GetReseracherDetails = async(req,res,next)=>{

    ApprovedResearcher.find(function(err,approvedResearches){
        if(err)
         console.log(err);
        else{
            res.json(approvedResearches);
        } 
    });

}

exports.GetReseracherDetails=GetReseracherDetails;