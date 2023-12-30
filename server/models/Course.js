const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lectureModel = require('./Lecture');

const CourseSchema = new Schema({
    
    name:{
        type: String,
        require: true,
    },
    title:{
        type:String,
        
    },
    image:{
        type: String,
    },
    price:{
        type: Number,
        default: 0
    },
    createdAt : {
        type: Date, 
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    expectation: {
        type: String
    },
    sale:{
        type:Number,
        default: 0,
        max:100,
    },
    level :{
        type: String
    },
    lectures: [lectureModel.schema],
},{ strict: false });

module.exports = mongoose.model('Course',CourseSchema);





