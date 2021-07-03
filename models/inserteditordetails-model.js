const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const insertdetailsSchema =  mongoose.Schema({
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

const EditorDetails = mongoose.model('EditorDetails', insertdetailsSchema);

module.exports = {EditorDetails}
