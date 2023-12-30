import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Header';
import LearningContent from '../../components/LearningContent';
import { LessonContext } from '../../states';
import { useParams } from 'react-router';
import axios from 'axios';
let config = {
  baseURL : "http://localhost:5000/api",
  withCredentials : true,
}


let cx = classNames.bind(styles);
   

const Learning = () => {
  const [Course,SetCourse] = useState({});
  const [Lectures,SetLecture] = useState([]);
  const [Lesson,SetLesson] = useState({});
  const [Progress,SetProgress] = useState([]);
  const param = useParams();
  const {courseid,lessonid} = param;
  const SubmitComment = async (text) => {
    try{  
         
          await axios.post(`/lesson/add-comment/${courseid}/${lessonid}`,{text:text},config)
          GetLesson();
           
   }catch(err) {
         console.log(err);
   } 
  }
  const GetLesson = async () => {
    try{
      
      const data = await axios.get(`/course/get-lesson/${courseid}/${lessonid}`,config);
      SetLesson(data.data);
      // console.log(data.data);
   }catch(err) {
         console.log(err);
   } 
  }
  const GetListLecture = async () => {
   try{
      const data = await axios.get(`/course/get-all-lecture/${courseid}`,config);
      SetLecture(data.data.lectures);
   }catch(err) {
         console.log(err);
   } 
  } 
  const GetCourse = async () => {
    try{
       const data = await axios.get(`/course/get-course/${courseid}`,config);
       SetCourse(data.data);
    }catch(err) {
          console.log(err);
    } 
   } 
  const GetProgress = async () => {
      try{
            const data = await axios.get(`/lesson/get-single-progress/${courseid}`,config);
            SetProgress(data.data);
         }catch(err) {
               console.log(err);
         } 
  }

  useEffect(()=>{
        GetListLecture();
        GetLesson();
        GetCourse();
        GetProgress();
  },[])

  return (  
    <LessonContext.Provider value={{Course,Lesson,GetLesson,SubmitComment,Progress,GetProgress}} >
    <div className={cx("container")}>
    <Header title={Course.name} id={Course._id} />
    <LearningContent Lesson={Lesson} Lectures={Lectures} Progress={Progress} />
    </div>
    </LessonContext.Provider>
  )
}

export default Learning