const {Conference} = require ('../models/conference-model');

const AddDetails = async(req,res,next)=>{

    //save data got from the client into the payment collection in the DB
    Conference.find(function (err, conference) {
        if (err) console.log(err);
        else {
          res.json(conference);
        }
      });

    }
    


exports.AddDetails=AddDetails;