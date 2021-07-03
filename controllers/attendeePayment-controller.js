const {Payment} = require ('../models/payment-model');

const AddPayment = async(req,res,next)=>{

    //save data got from the client into the payment collection in the DB
    const payment = new Payment(req.body)

        await payment.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
}

exports.AddPayment=AddPayment;