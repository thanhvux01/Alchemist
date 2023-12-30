import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import DetailCourseContent from '../../../components/Manage/Course/Detail';
import { SidebarAlt } from '../../../components/Sidebar';
import { configAxios } from '../../../config';
import axios from 'axios';
import { useParams } from 'react-router';
import { ManageCourseContext } from '../../../states';
let cx = classNames.bind(styles);

const ManageCourse = () => {
   const [Course,SetCourse] = useState();
   const params = useParams();
   const [Success,SetSuccess] = useState(false);
   const {courseid} = params;
   
   const GetCourse = async () => {
      try{
          const course = await axios.get(`/course/get-course-full/${courseid}`,configAxios);
          SetCourse(course.data);
      }catch(err){
        console.log(err);
      }
   }
   const changeLectureName = (index,name) => {
         SetCourse((prev)=>{
          let course = {...prev};
          if(course.lectures.length > 0 ) {
            if(name)
             course.lectures[index].name =  name;
          }    
            return {...prev,lectures:course.lectures}
         })
   }
   const switchPublic = (index) => {
     SetCourse((prev)=>{
      let lectures = prev.lectures;
         lectures[index].public = !lectures[index].public;
          return {...prev,lectures:lectures}
     })
   }
   const switchSuccess = () => {
       SetSuccess(false);
   }
   const addLecture = () => {
      SetCourse((prev)=>{
          let pref = prev;
          let newLecture = {
               name:"",
               lessons:[],
               public:false,
          }
          pref.lectures.push(newLecture);
          return {...pref}
      })
   }
   const submitChange = async () => {
     try{
        await axios.post(`/course/update-course/${courseid}`,{course:Course},configAxios);
        SetSuccess(true);
     }catch(err){
       console.log(err);
     }
   }
 const DeleteLecture = (index) => {
      SetCourse((prev)=>{
         let pref = {...prev};
         pref.lectures.splice(index,1);
         return pref;
      })
 }
 useEffect(()=>{
   GetCourse();
 },[])
  return (
    <ManageCourseContext.Provider value={{changeLectureName,switchPublic,Course,DeleteLecture}}>
    <div className={cx('container')}>
      <SidebarAlt lbl={'manage'}/>
      {Course && <DetailCourseContent course={Course} switchSuccess={switchSuccess} success={Success} submitChange={submitChange} setCourse={SetCourse} addLecture={addLecture} />  }
    </div>
    </ManageCourseContext.Provider>
  )
}
export default ManageCourse