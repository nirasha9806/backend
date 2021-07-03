const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let accountSchema = new Schema({

    card_number : {

        type : Number
    },

    card_holder : {

        type : String
    },

    date : {

        type : Date
    },

    CVC : {
        type : Number
    }

},{
    timestamps:true
});

const Account = mongoose.model('Account',accountSchema);
module.exports ={Account}