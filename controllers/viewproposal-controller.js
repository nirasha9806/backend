const {ApprovedProposals}= require('../models/approvedProposals-model');


const GetproposalDetails = async(req,res,next)=>{

    ApprovedProposals.find(function(err,approvedProposals){
        if(err)
         console.log(err);
        else{
            res.json(approvedProposals);
        } 
    });

}

exports.GetproposalDetails=GetproposalDetails;