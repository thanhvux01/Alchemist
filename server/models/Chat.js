const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ChatSchema = new Schema({
    question:{
        type: String,
        require: true,
    },
    answer:{
        type: String,
        require: true,
    },
    mark:{
        type:Boolean,
        default:0,
    }
});
module.exports = mongoose.model('chat',ChatSchema);

