
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {DateOfNowString,DateOfNow} = require("../utils/dateOfNow");
require("dotenv").config();
const User = require('../models/User');
const { default: mongoose } = require('mongoose');

//get your info

const GetUser = async (req,res) => {
    try{
        const user = await User.findOne({_id:req.user.id});     
        if(!user){
            return res.status(404).send("cannot find user");
        }
        const {username, email, fullname , createdAt , birthday , nickname ,isAdmin} = user;
        return res.status(200).send({username, email, fullname , createdAt , birthday , nickname , isAdmin});
    }
    catch(err){
        console.log(err);
        return res.status(400).send("ERROR");
    }
};

//simple info user with id 

const GetPublicUser = async (req,res) => {
   try{
      const {userid} = req.params;
      const user = await User.findOne({_id:userid},{username:1});
      if(!user){
        return res.status(404).json({message:'user not found',status:'fail'});
      }
      return res.status(200).json(user);

   }catch(err){
   console.log(err);
   return res.status(400).json({message:'error',status:'fail'});
   }

}
const GetAllUser = async (req,res) => {
    try{
      const user = await User.find({});
      const handledUser = user.map((item)=>{
        const userobj = {
            id:item._id,
            username:item.username,
            fullname:item.fullname,
            email:item.email,
        }
        return userobj;
    });
        res.status(200).send(handledUser);
    }catch(err){
        console.log(err);
        return res.status(400).send("Error");
    }
};

const Register = async (req,res) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const {username,fullname,email,password} = req.body;

        const checkuser = await User.findOne({username});
        if(checkuser)
        return res.status(400).json({ success: false, message: "Username is already Exist" });
        const checkmail = await User.findOne({email});
        if(checkmail)
        return res.status(400).json({ success: false, message: "Email is already Exist" });
        const hash = bcrypt.hashSync(password,salt);
        const user = new User({
            username,
            fullname,
            email,
            password:hash,
        });
        await user.save();
        return res.status(200).send("Success");
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ success: false, message: "Internal server error" });
    }
};

const UpdateUserByUser = async(req,res) => {
    try {
        const{birthday,nickname,email,number} = req.body;
        const user = await User.findOne({_id:req.user.id});
        if(!user){
            return res.status(404).send("Not found");
        }
        await User.updateOne({_id:req.user.id},{birthday,nickname,email,number,updateAt:DateOfNow()});
        return res.status(200).json({"status":"success"});
    } catch(err) {
        console.log(err);
        return res.status(400).json({"message":err,"status":"fail"});
    }
};

const AddNote = async (req,res) => {
    try{

        const {courseid,lessonid} = req.params;
        const user = await User.findOne({_id:req.user.id});     
        if(!user){
            return res.status(404).send({ success: false, message: "cannot find your user" });
        }
        const text = req.body.text;
        if(!text) {
            return res.status(400).send({ success: false, message: "text is empty" });
        }
        const uCourse = user.courses.find((course)=>course.id==courseid);
        if(!uCourse){
            return res.status(404).send({ success: false, message: "cannot find your courses" });
        }
        const uLesson = uCourse.lessons.find((lesson)=>lesson.id==lessonid);
        if(!uLesson)
        return res.status(404).send({ success: false, message: "cannot find your lesson" });
        uLesson.note = text;
        user.save();
        return res.status(200).json(uLesson);

    }catch(err){
    console.log(err);
    return res.status(400).json({message:'error',status:'fail'});
    }
}




module.exports = {GetUser, GetAllUser, Register, UpdateUserByUser, GetPublicUser , GetPublicUser , AddNote}