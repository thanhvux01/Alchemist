const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();
const User = require('../models/User');
const { handleRegisterEmail } = require('./MailConfig');
const { verifyToken } = require('../utils/verify');



// api/auth/register
// register user


const Register = async (req,res) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const {username,email,password} = req.body;
        const checkuser = await User.findOne({username});
        if(checkuser)
        return res.status(400).json({ success: false, message: "Username is already Exist" });
        const checkmail = await User.findOne({email});
        if(checkmail)
        return res.status(400).json({ success: false, message: "Email is already Exist" });
        const hash = bcrypt.hashSync(password,salt);
        const user = new User({
            username,
            email,
            password:hash,
        });
        user.verifyToken = bcrypt.hashSync(email+process.env.SECRET_KEY,salt);
        handleRegisterEmail(email,user.verifyToken);
        await user.save();
        return res.status(200).send("Success");
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ success: false, message: "Internal server error" });
    }
};

// api/auth/login
// login user

const Login = async (req,res) => {
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user) { 
            return res.status(404).json({error:"User not found",status:"404"}) ;
        }
        const comparePassword = await bcrypt.compare(req.body.password,user.password)
        if(!comparePassword) {
            return res.status(400).json({error:"Wrong password",status:"400"});
        }
        const {_id, password, isAdmin , courses , chats,...rest} = user._doc; 
        const token = jwt.sign({id:_id,isAdmin}, process.env.SECRET_KEY);
        return res.cookie("access_ticket",token,{httpOnly:true}).status(200).json({...rest});
    } catch(err) {
        console.log(err);
        return res.status(400).json({ success: false, message: "Internal server error" });
    }
};



// api/auth/logout
// logout user

const Logout = (req,res)=>{
    try {
        res.clearCookie("access_ticket",{
        secure:true,
        sameSite:"none",
    }).status(200).json("User has been logout");
    } catch(err) {
        console.log(err);
        return res.status(400).send("Somethings wrong?");
    }
};

// api/auth/verify
// logout user

const Verify = async (req,res)=>{
    try {
        const token = req.query.token;
        const user = await User.findOne({ verifyToken: token });
        if(!user){
           return res.status(400).json({message:"error"});
        }
        user.verify = true;
        user.verifyToken = undefined;
        user.save();
        res.status(200).json({message:"verify successfuly"});
    } catch(err) {
        console.log(err);
        return res.status(400).send("Somethings wrong?");
    }
};

module.exports = {Register, Login,  Logout , Verify}