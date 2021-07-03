const {Researcher} = require ('../models/researcher-model');

const ViewResearchPaper = async(req,res,next)=>{

    //get method to fetch data from researchers collection
    console.log('Get research paper details');

    await Researcher.find({})
    .exec(function(err, researchers){
        if(err){
            console.log('Error retrieving')
        }else{
            console.log(researchers);
            res.json(researchers);
        }
    });
}

//delete method
const deleteResearchPaper = async (req, res) => {
    await Researcher.deleteOne({ _id: req.params.id }, function (err, Researcher) {
      if (err) res.json(err);
      else res.json("Successfully Deleted");
    });
  };


exports.ViewResearchPaper=ViewResearchPaper;
exports.deleteResearchPaper=deleteResearchPaper;