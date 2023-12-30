const express = require('express');
const router = express.Router();

const {ListLesson, GetALesson, UpdateLesson, CreateLesson ,AddComment, LessonAvailable ,GetProgress , SetComplete , GetSingleProgress} = require('../controllers/LessonController');
const { verifyToken } = require('../utils/verify');
const { CourseAvailable } = require('../controllers/CourseController');

router.get("/list-lessons", ListLesson);
router.post("/get-lesson", GetALesson);
router.get("/get-progress",verifyToken,GetProgress);
router.get("/get-single-progress/:courseid",verifyToken,GetSingleProgress);


router.post("/update-lesson/:courseid/:lessonid",verifyToken,UpdateLesson);
router.post("/create-lesson",CreateLesson);
router.post("/add-comment/:courseid/:lessonid",verifyToken,CourseAvailable,LessonAvailable,AddComment);
router.get("/set-complete/:courseid/:lessonid",verifyToken,SetComplete);

module.exports = router;