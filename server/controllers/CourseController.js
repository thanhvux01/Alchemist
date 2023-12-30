const express = require("express");
const router = express.Router();
require("dotenv").config();
const Course = require("../models/Course");
const User = require("../models/User");
const Lesson = require("../models/Lesson");
const Lecture = require('../models/Lecture');
const UserLesson = require('../models/RefLesson');
const UserCourse = require('../models/RefCourse');
const Order = require("../models/Order");
const {handleOrderEmail} = require("./MailConfig");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

//Get all course

const GetAllCourse = async (req, res) => {
  try {
    const courses = await Course.find({}, { lesson: 0 });
    if (!courses) {
      return res.status(404).send("Something wrong");
    }
    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(404).send("User Not found");
    }
    const arrUserCourseId = user.courses.map((item) => item.id);
    let result = courses.map((item) => {
      if (arrUserCourseId.filter((id) => id == item._id.toString()).length > 0)
        return { ...item.toObject(), owned: true };
      return { ...item.toObject(), owned: false };
    });
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: "Error" });
  }
};

const CheckOwned = async (req, res) => {
  try {
    const courseId = req.body.id;

    if (!courseId) {
      return res.status(404).send("ID Not found");
    }
    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(404).send("User Not found");
    }
    const arrUserCourseId = user.courses.map((item) => item.id);
    if (arrUserCourseId.filter((item) => item == courseId).length > 0)
      return res.status(200).json({ success: true, message: "owned" });
    return res.status(400).json({ success: false, message: "fail" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: "Error" });
  }
};

const isOwned = async (req, res, next) => {
  try {
    const courseId = req.params.id || req.params.courseid;
    if (!courseId) {
      return res.status(404).send("ID Not found");
    }
    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(404).send("User Not found");
    }
    const arrUserCourseId = user.courses.map((item) => item.id);
    if (arrUserCourseId.filter((item) => item == courseId).length > 0) {
      next();
    } else {
      return res.status(400).json({ success: false, message: "Unvalid" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: "Error" });
  }
};

const GetOwnedCourse = async(req,res) => {
  try{
     const userCourse = await User.findOne({_id:req.user.id}).select('courses').exec();
     let arrayOfCourseId = [];
     if(userCourse && userCourse.courses.length > 0)
     userCourse.courses.map((course)=>{
          arrayOfCourseId.push(course.id);
     })
     const objectId = arrayOfCourseId.map((id)=>mongoose.Types.ObjectId(id));
    const courses = await Course.find({_id:{$in:objectId}},{lectures:0});
    let mergeCourse = []
      courses.map((course,ic)=>{
        return userCourse.courses.map((ucourse,iu)=>{
            if(ucourse.id==course.id){
               mergeCourse.push({...course._doc,userdata:ucourse})
            }       
          })
     })
    return res.status(200).json(mergeCourse);
  }catch(err){
  console.log(err);
  return res.status(400).json({message:'error',status:'fail'});
  }

}

const GetCourse = async (req,res) => {
     try{
             const {id} = req.params;
             const course = await Course.findOne({_id:id},{"lectures.lessons.data":0,"lectures.lessons.comments":0});
             return res.status(200).json(course);
     }catch(err){
     console.log(err);
     return res.status(400).json({message:'error',status:'fail'});
     }
}
const GetCourseFull = async (req,res) => {
  try{
          const {id} = req.params;
          const course = await Course.findOne({_id:id});
          return res.status(200).json(course);
  }catch(err){
  console.log(err);
  return res.status(400).json({message:'error',status:'fail'});
  }
}




//Get all course(info)
const ListCourse = async (req, res) => {
  try {
    const course = await Course.find({});
    const handlecourse = course.map((item) => {
      const courseobj = {
        id: item.courseID,
        name: item.name,
        image: item.image,
        price: item.price,
        description: item.description,
      };
      return courseobj;
    });
    return res.status(200).send(handlecourse);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error");
  }
};

const CourseAvailable = async(req,res,next) => {
  try{
    const {courseid} = req.params 
    const course = await Course.findById(courseid);
    if(!course){
     return res.status(404).json({success:false, message: "Course not found" });
    }
    req.course = course;
    next();
  }catch(err){
    console.log(err);
    return res.status(400).send("Error");
  }
}

//create a new course
const CreateCourse = async (req, res) => {
  try {
    const { name, image, price, description, expectation, lesson } = req.body;
    const course = new Course({
      name,
      image,
      price,
      description,
      expectation,
      lesson,
    });
    await course.save();
    return res
      .status(200)
      .json({ message: "Course created successfully", course });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: "Error" });
  }
};

//Delete course
const DeleteCourse = async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const course = await Course.findOne({ id: _id });
    if (!course) {
      res.status(400).send("Can not find course");
    }
    await Course.deleteOne({ id: _id }, rest);
    res.status(200).send("Delete success");
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Error" });
  }
};

//Add a new lesson to a course
const CreateLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content } = req.body;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(400).json({ message: "Course not found" });
    }
    const lesson = {
      id,
      name,
      content,
    };
    course.lesson.push(lesson);
    await course.save();
    return res
      .status(200)
      .json({ message: "Lesson added successfully", course });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Add error" });
  }
};

const CreateLecture = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(400).json({ message: "Course not found" });
    }
    const lecture = new Lecture;
    lecture.name = 'Thử nghiệm';
    lecture.preview = false;
    lecture.lessons = [];

    course.lectures.push(lecture);
    await course.save();
    return res
      .status(200)
      .json({ message: "lecture added successfully", course });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Add error" });
  }
};
//Get all lecture for a course
const GetAllLecture = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id,{'lectures._id':0,'lectures.lessons.data':0});
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    const lectures = course.lectures;
    return res.status(200).json({ lectures });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Error" });
  }
};

const GetLectureById = async (req,res) => {
  try {
    const { lectureid,courseid } = req.params;
   const course= await Course.findOne({_id:courseid,'lectures._id':lectureid},{'lectures.$':1});
   
    return res.status(200).json(course.lectures);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error" });
  }
}

const GetLectureByIdV2 = async (req,res) => {
  try {
    const { lectureid,courseid } = req.params;
   const  course = await Course.findOne({_id:courseid,'lectures._id':lectureid},{'lectures.$':1});
   
    return res.status(200).json(course.lectures[0]);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error" });
  }
}
const GetLessonReduce = async  (req,res) => {
  try {
    const { courseid,lessonid } = req.params;
    let lectureName  = undefined;
   const course = await Course.findById(courseid);
   if(!course){
    return res.status(404).json({success:false, message: "Course not found" });
   }
   const lesson = course.lectures.reduce((foundLesson,lecture)=>{
         if(!foundLesson){
          if(lecture.lessons.id(lessonid)){
          lectureName = lecture.name
          }
          return lecture.lessons.id(lessonid)
         }
         return foundLesson
   },null)
       
   if(!lesson) {
    return res.status(404).json({ success:false,message: "can't find lesson"});
   }
    
    return res.status(200).json({...lesson._doc,lectureName}); 
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error" });
  }
}

const AddLessonToLecture = async () => {
  try {
    const { lectureid } = req.params;
   const course = await Course.find({});
   if(!course){
    return res.status(404).json({success:false, message: "Course not found" });
   }
  const lecture = course.lectures.id(lectureid);
  if(!lecture){
    return res.status(404).json({success:false, message: "lecture not found" });
  }
       
   if(!lesson) {
    return res.status(404).json({ success:false,message: "can't find lesson"});
   }
    return res.status(200).json(lesson);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error" });
  }
}




//Delete a lesson for a course
const DeleteLesson = async (req, res) => {
  try {
    const { id, lessonID } = req.params;
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    course.lesson = course.lesson.filter(
      (lesson) => lesson.lessonID !== lessonID
    );
    await course.save();
    return res
      .status(200)
      .json({ message: "Lesson deleted successfully", course });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error" });
  }
};
const GetLessonSpecific = async (req, res) => {
  try {
    const { id, index } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    const lesson = course.lesson;
    return res.status(200).json({ lesson: lesson[index] });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Error" });
  }
};



const AddCourseToUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(400).send("User Not found");
    }
    const { id } = req.body;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(400).send("Course Not found");
    }
    if (user.courses.find(({ id }) => id == course._id.toString())) {
      return res.status(400).send("You already owned it");
    }
     const allLesson = course.lectures.reduce((lessons,lecture)=>{
                    const initULesson = lecture.lessons.map((lesson)=>{
                            const uLesson = new UserLesson();
                               uLesson.id = lesson.id;
                               return uLesson;
                        })
                return lessons.concat(initULesson);
     },[])
     //Init save file for user
    const uCourse = new UserCourse();
    uCourse.id = course._id;
    uCourse.curLesson = course.lectures[0].lessons[0]._id;
    uCourse.lessons = allLesson;
    user.courses.push(uCourse);
    // //Create new Order
    const newOrder = new Order();
    newOrder.userId = user._id;
    newOrder.courseId = course._id;
    newOrder.total = course.price;
    handleOrderEmail(user.email,user.username,newOrder._id,newOrder.createAt,course.name,course.price*(1-course.sale));
    await user.save();
    await newOrder.save();
    return res.status(200).json("success");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Somethings wrong?");
  }
};

const UpdateCourse = async (req, res) => {
  try {
    const { courseid} = req.params;
    const pref = await Course.findById(courseid);
    if (!pref) {
      return res.status(404).json({ message: "Course not found" });
    }
    
    const {course} = req.body;
    if(!course)
    return res.status(404).json({ message: "lecture not found" });
    pref.name = course.name;
    pref.description = course.description;
    pref.price = course.price;
    pref.lectures = course.lectures;
    pref.save();
    return res.status(200).json(course);

  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Error" });
  }
};


module.exports = {
  GetAllCourse,
  GetCourse,
  ListCourse,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
  CreateLesson,
  GetAllLecture,
  DeleteLesson,
  GetLessonSpecific,
  AddCourseToUser,
  CheckOwned,
  isOwned,
  GetLectureById,
  CreateLecture,
  GetLessonReduce,
  CourseAvailable,
  GetOwnedCourse,
  GetCourseFull,
  GetLectureByIdV2
};
