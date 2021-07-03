const {Account} = require ('../models/research-payment-model');

const AddPayment = async(req,res,next)=>{

    //save data got from the client into the payment collection in the DB
    const account = new Account(req.body)

        await account.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
}

exports.AddPayment=AddPayment;