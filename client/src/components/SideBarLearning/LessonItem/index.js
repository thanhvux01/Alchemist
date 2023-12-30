import React, { useContext, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import {  OndemandVideo } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate, useParams } from 'react-router';
import { LessonContext } from '../../../states';
import axios from 'axios';
import { configAxios } from '../../../config';


let cx = classNames.bind(styles);

const LessonItem = ({content,index,progress}) => {
  const data = useContext(LessonContext)
  // const isComplete = data.Progress.lessons.find((lesson)=>lesson._id==content._id) && true
  const lessonProgress = data.Progress.lessons.find((lesson)=>content._id==lesson.id)
  const [Checked,SetChecked] = useState(lessonProgress.isComplete);
  const {courseid} = useParams()
  const Navigate = useNavigate();
  const GoToLesson = () => {
       Navigate(`/learn/${courseid}/lesson/${content._id}`)
       data.GetLesson();
      //  console.log(lesson.Lesson._id);
      //  console.log(content._id);
  } 
  const OnChangeCheckbox = async(e) => {
         try{
          
           SetChecked((prev)=>!prev);
           await axios.get(`/lesson/set-complete/${courseid}/${content._id}`,configAxios);
           
         }catch(err){
         console.log(err);
         }
  }
  const checked = content._id == data.Lesson._id;
  return (
    <div className={cx("lesson-wrapper",checked && 'checked')} onClick={GoToLesson} >
    <span className={cx("lesson-title")}>
      <Checkbox onChange={OnChangeCheckbox} checked={Checked}  inputProps={{ 'aria-label': 'controlled' }} />
       {`Bài ${index+1}: ${content.name}`}
    </span>
    <span className={cx("time")}>
      <OndemandVideo sx={{ height: "16px" }} />1 phút
    </span>
  </div>
  )
}

export default LessonItem