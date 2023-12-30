const mongoose = require('mongoose');
const Course = require('./Course');
const uCourse = require('./RefCourse');
const Chat = require('./Chat');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        maxLength:20
    },
    fullname:{
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    nickname:{
        type: String,
        maxLength: 20
    },
    birthday:{
        type: Date,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updateAt:{
        type:Date,
        default: Date.now
    },
    verify:{
        type:Boolean,
        default:false,
    },
    verifyToken:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },level:{
        type:Number,
        default:1
    },
    courses:[uCourse.schema],
    chats:[Chat.schema],
});



module.exports = mongoose.model('user', UserSchema);