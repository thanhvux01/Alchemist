const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uLesson = require('./RefLesson');


const UserCourseSchema = new Schema({
    _id:false,
    id:{
       type: Schema.Types.ObjectId,
       ref:'course'
    },
    curLesson:{
        ref:'lesson',
        type:Schema.Types.ObjectId,
        
    },
    lessons:[uLesson.schema],
    
})

module.exports = mongoose.model('ucourse', UserCourseSchema);