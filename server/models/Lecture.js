const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lessonModel = require('./Lesson')

const LectureSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    lessons:[lessonModel.schema],
    public:{
        type:Boolean,
        default:false,
    }
});
module.exports = mongoose.model('lecture',LectureSchema);

