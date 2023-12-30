import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { SidebarAlt } from '../../../components/Sidebar';
import { configAxios } from '../../../config';
import { useParams } from 'react-router';
import ManageLessonContent from '../../../components/Manage/Lesson';

let cx = classNames.bind(styles);

const ManageLesson = () => {
  const [Lesson,SetLesson] = useState()
  const params = useParams();
  const {courseid,lessonid} = params;
  const [Success,SetSuccess] = useState(false);
  
  const GetLesson = async () => {
      try{
        const lesson = await axios.get(`/course/get-lesson-ad/${courseid}/${lessonid}`,configAxios);
        SetLesson(lesson.data);
      }catch(err){
       console.log(err);
      }
  }
  const UpdateTheoryLesson = async (content) => {
    try{
       await axios.post(`/lesson/update-lesson/${courseid}/${lessonid}`,{name:Lesson.name,data:{doc:content}},configAxios);
       SetSuccess(true);
    }catch(err){
     console.log(err);
    }
  }
  const pushQuestion = () => {
       if(Lesson.category == "quiz") {
            SetLesson((prev)=>{
                const questions = prev.data.questions;
                const newQuestion = {
                   name:"",
                   a1:"",
                   a2:"",
                   a3:"",
                   a4:"",
                   result:""
                }
                questions.push(newQuestion);
                return {...prev,data:{questions}}
            })
       }
  }
  const handleVideoUrl = (e) => {
    if(Lesson.category == "video") {
      SetLesson((prev)=>{
          return {...prev,data:{url:e.target.value}}
      })
 }
  }
  const UpdateQuizLesson = async () => {
    try{
       await axios.post(`/lesson/update-lesson/${courseid}/${lessonid}`,{name:Lesson.name,data:{questions:Lesson.data.questions}},configAxios);
       SetSuccess(true);
    }catch(err){
     console.log(err);
    }
  }
  const UpdateVideoLesson = async ()  => {
    try{
      console.log("here")
      await axios.post(`/lesson/update-lesson/${courseid}/${lessonid}`,{name:Lesson.name,data:{url:Lesson.data.url}},configAxios);
      SetSuccess(true);
   }catch(err){
    console.log(err);
   }
  }
  useEffect(()=>{
        GetLesson();
  },[])
  return (
    <div className={cx('container')}>
       <SidebarAlt  lbl={'manage'}/>   
       {Lesson && <ManageLessonContent lesson={Lesson} updateTheoryLesson={UpdateTheoryLesson} setLesson={SetLesson}
       success={Success} setSucces={SetSuccess} pushQuestion={pushQuestion}  updateQuizLesson={UpdateQuizLesson}
       updateVideoLesson={UpdateVideoLesson} handleVideoUrl={handleVideoUrl}/>  }

    </div>
  )
}

export default ManageLesson