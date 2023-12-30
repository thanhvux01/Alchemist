const express = require('express');
const router = express.Router();

const {QuestionType1,UncategoryQuestion , GetChat , QuestionType2} = require('../controllers/OpenAIManage');
const {verifyToken} = require('../utils/verify');


router.get("/user-chat",verifyToken,GetChat);
router.post('/question/zn',verifyToken,QuestionType1);
router.post('/question/electron',verifyToken,QuestionType2);
router.post('/question/uncategory',verifyToken,UncategoryQuestion);;

module.exports = router;