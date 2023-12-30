const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserLessonSchema = new Schema({
    _id:false,
    id:{
        type:Schema.Types.ObjectId,
        ref:'lesson'
    },
    isComplete:{
        type:Boolean,
        default:0,
    },
    saved:{
        type:Boolean,
        default:0
    },
    note:{
        type:String,
    },
    loved:{
        type:Boolean,
        default:0
    }
},{strict:false})

module.exports = mongoose.model('ulesson', UserLessonSchema);