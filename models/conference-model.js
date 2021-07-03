const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const ConferenceSchema =  mongoose.Schema({
    research_name : {
        type:String
    },
    author_name : {
        type:String
    },
    research_Type : {
        type:String
    }
},{timesamps:true})

const Conference = mongoose.model('Conference', ConferenceSchema);

module.exports = {Conference}
