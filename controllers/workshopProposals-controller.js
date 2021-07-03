const {WorkshopPresenter} = require ('../models/workshopPresenter-model');

const ViewWorkshopProposal = async(req,res,next)=>{

    //get method to fetch data from workshopProposals collection
    console.log('Get workshopProposals paper details');
    
    await WorkshopPresenter.find({})
    .exec(function(err, workshoppresenters){
        if(err){
            console.log('Error retrieving')
        }else{
            console.log(workshoppresenters);
            res.json(workshoppresenters);
        }
    });

}

//delete method
const deleteWorkshopProposal = async (req, res) => {
    await WorkshopPresenter.deleteOne({ _id: req.params.id }, function (err, WorkshopPresenter) {
      if (err) res.json(err);
      else res.json("Successfully Deleted");
    });
  };


exports.ViewWorkshopProposal=ViewWorkshopProposal;
exports.deleteWorkshopProposal=deleteWorkshopProposal;
