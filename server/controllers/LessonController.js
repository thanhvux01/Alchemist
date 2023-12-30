const Lesson = require("../models/Lesson");
const User = require("../models/User");
const Comment  = require("../models/Comment");
const Course = require("../models/Course");
//Get List lesson

const SetComplete = async (req,res) => {
       try{
        
        const {courseid,lessonid} = req.params;
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
          return res.status(404).send("User Not found");
        }
        const course = user.courses.find((course)=>{
           return course.id==courseid       
        })
        const findLesson = course.lessons.find((lesson)=>lesson.id==lessonid)
        if(!findLesson) {
            return res.status(404).send("Lesson Not found");
        }
        findLesson.isComplete = !findLesson.isComplete;
        user.save();
        return res.status(200).json({message:'success',status:'success'});
       }catch(err){
       console.log(err);
       return res.status(400).json({message:'error',status:'fail'});
       }
}


const GetProgress = async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id });
      if (!user) {
        return res.status(404).send("Not found");
      }
      return res.status(200).json(user.courses);
    } catch (err) {
      console.log(err);
      return res.status(400).send("Somethings wrong?");
    }
  };
  const GetSingleProgress = async (req, res) => {
    try {
      const {courseid} =req.params;
      const user = await User.findOne({ _id: req.user.id });
      if (!user) {
        return res.status(404).send("Not found");
      } 
      const progress = user.courses.find((course)=>course.id==courseid);
      return res.status(200).json(progress)
    } catch (err) {
      console.log(err);
      return res.status(400).send("Somethings wrong?");
    }
  };


const AddComment = async (req,res) => {
    try{
        const lesson  = req.lesson;
        const course = req.course;
        const newComment = new Comment();
        newComment.user = req.user.id;
        newComment.text = req.body.text;
        lesson.comments.push(newComment);
        course.save();
        return res.status(200).json({message:"Success",status:"Success"})

    }catch(err){
        console.log(err);
        return res.status(400).json({ message: "Error" });
    }
}




const LessonAvailable = async (req,res,next) => {
    try {
       const { lessonid } = req.params;
       const course = req.course;
       const lesson = course.lectures.reduce((foundLesson,lecture)=>{
             if(!foundLesson){
              return lecture.lessons.id(lessonid)
             }
             
             return foundLesson
       },null)
           
       if(!lesson) {
        return res.status(404).json({ success:false,message: "can't find lesson"});
       }
        req.lesson = lesson;
        next();
      } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Error" });
      }
}
const ListLesson = async (req,res) => {
    try {
        const lesson = await Lesson.findOne();
        const handleLesson = lesson.map((item)=>{
            let lessonObj = {name:"",number:0,id:"",description:""};                           
                        lessonObj.name = item["name"];   
                        lessonObj.id = item["id"];
                        lessonObj.description = item["description"];
                        lessonObj.numberOfQuestion = item["content"].length;         
                        return lessonObj;                   
            });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error");
    }
};

//Get A Lesson

const GetALesson = async (req,res) => {
    try {
        const {lessonID} = req.body;
        const lesson = await Lesson.findOne({id:lessonID});
        if(!lesson){
            return res.status(404).send("Lesson Not Found");
        }
        res.status(200).send(lesson);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error");
    }
};

//Update Lesson

const UpdateLesson = async (req, res) => {
    try {
      const { courseid,lessonid } = req.params;
      const {name,data} = req.body;
     const course = await Course.findById(courseid);
     if(!course){
      return res.status(404).json({success:false, message: "Course not found" });
     }
     const lesson = course.lectures.reduce((foundLesson,lecture)=>{
           if(!foundLesson){
            return lecture.lessons.id(lessonid)
           }
           return foundLesson
     },null)
     
     if(!lesson) {
      return res.status(404).json({ success:false,message: "can't find lesson"});
     }
     if(name)
     lesson.name = name;
     if(data)
     lesson.data = data;
     course.save()
      return res.status(200).json(lesson); 
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: "Error" });
    }
  };

//Create Lesson 

const CreateLesson = async (req,res) => {
    try {
        const {id, name, description, price, content} = req.body;
        
        const contentArray = content.map((react) =>{
            const { LessonContent } = react;
                return {
                    LessonContent: {type: LessonContent}
                };
        });
        const lesson = new Lesson({
            id,
            name,
            description,
            price,
            content:[contentArray]
        });
        await lesson.save();
        res.status(200).send("Success");
    } catch (err) {
        console.log(err);
        res.status(400).send("Somethings wrong");
    }
}

//Delete Lesson

const DeleteLesson = async(req,res) => {
    try {
        const {lessonID} = req.body;
        const lesson = await Lesson.findOne({id:lessonID});
        if(!lesson)
            return res.status(404).send("Lesson Not Found");

        await Lesson.remove();
        res.status(200).send("Delete success");
    } catch (error) {
        console.log(err);
        res.status(400).send("Somethings wrong");
    }
}



module.exports = {ListLesson, GetALesson, UpdateLesson, CreateLesson, DeleteLesson ,AddComment ,LessonAvailable , GetProgress ,SetComplete , GetSingleProgress}