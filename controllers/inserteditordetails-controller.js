const {EditorDetails} = require("../models/inserteditordetails-model");

const AddDetails = async(req,res,next)=>{

    //save data got from the client into the payment collection in the DB
    const editorDetails = new EditorDetails(req.body)

         editorDetails.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
}

exports.AddDetails=AddDetails;