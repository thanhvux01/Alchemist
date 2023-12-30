const express = require('express');
const router = express.Router();

const {GetAllCourse, CreateCourse, UpdateCourse, DeleteCourse, CreateLesson, isOwned, UpdateLesson, DeleteLesson ,GetLessonSpecific,GetLessonByUser,AddCourseToUser 
,CheckOwned, GetAllLecture,GetLectureById,CreateLecture,GetLessonReduce,GetOwnedCourse , GetCourse , GetCourseFull , UpdateLectures
,GetLectureByIdV2} = require('../controllers/CourseController');

const {verifyToken, verifyAdmin} = require('../utils/verify');
//Course
router.post("/create-course", CreateCourse);
router.get("/get-all-course",verifyToken, GetAllCourse);
router.get("/get-course/:id",verifyToken, GetCourse);
router.get("/get-course-full/:id",verifyToken, GetCourseFull);
router.post("/update-course/:courseid",verifyToken, UpdateCourse);
router.delete("/delete-course", DeleteCourse);
router.post("/add-course-user",verifyToken,AddCourseToUser);
router.post("/check-owned",verifyToken,CheckOwned);
router.get("/get-owned-course",verifyToken,GetOwnedCourse);
//Lesson
router.post("/create-lesson/:id", CreateLesson);
router.get("/get-lesson/:courseid/:lessonid",verifyToken,isOwned, GetLessonReduce);
router.get("/get-lesson-ad/:courseid/:lessonid",verifyToken, GetLessonReduce);
router.get("/get-all-lecture/:id",verifyToken,isOwned, GetAllLecture);
router.get("/get-lecture/:courseid/:lectureid",verifyToken,GetLectureById);
router.get("/get-lectureV2/:courseid/:lectureid",verifyToken,GetLectureByIdV2);
router.get("/create-lecture/:id",verifyToken,CreateLecture);

// router.post("/update-lesson/:id/:lessonID", UpdateLesson);
// router.delete("/delete-lesson/:id/:lessonID", DeleteLesson);
// router.get("/get-lesson-id/:id/:index", GetLessonSpecific);


module.exports = router;