const {EditorDetails}= require('../models/inserteditordetails-model');


const GetDetails = async(req,res,next)=>{

    EditorDetails.find(function(err,editorDetails){
        if(err)
         console.log(err);
        else{
            res.json(editorDetails);
        } 
    });

}

//delete
const DeleteDetails = async(req,res,next)=>{
    EditorDetails.deleteOne({ _id: req.params.id }, function (err, editorDetails) {
      if (err) res.json(err);
      else res.json('successfully removed');
    });

}   
 
exports.GetDetails=GetDetails;
exports.DeleteDetails=DeleteDetails;