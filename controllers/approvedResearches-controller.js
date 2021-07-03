const {ApprovedResearcher} = require ('../models/approvedResearches-model');

const AddApprovedResearcher = async(req,res,next)=>{

    //save data got from the client into the ApprovedResearcher collection in the DB
    const approvedResearches = new ApprovedResearcher(req.body)

        await approvedResearches.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
}

exports.AddApprovedResearcher=AddApprovedResearcher;