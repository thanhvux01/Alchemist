const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModel = require('./Comment');


const LessonSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    category: {
        type: String
    },
    comment:{
        type:String
    },
    description: {
        type: String
    },
    data:{
        type:Object
    },
    length:{
         type:Number,
         default:3
    },
    comments:[commentModel.schema]
    
},{ strict: false });
module.exports = mongoose.model('lesson',LessonSchema);

