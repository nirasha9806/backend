const {ApprovedProposals} = require ('../models/approvedProposals-model');

const AddApprovedProposals = async(req,res,next)=>{

    //save data got from the client into the ApprovedResearcher collection in the DB
    const approvedProposals = new AddApprovedProposals(req.body)

        await approvedProposals.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
}

exports.AddApprovedProposals=AddApprovedProposals;