import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { SidebarAlt } from '../../components/Sidebar';
import ManageCourseContent from '../../components/Manage/Course';
import { configAxios } from '../../config';
let cx = classNames.bind(styles);

const Admin = () => {
  const [Courses,SetCourses] = useState([]);
  const GetAllCourse = async () => {
      try{
         const courses = await axios.get("/course/get-all-course",configAxios);
         SetCourses(courses.data);
         
      }catch(err){
         console.log(err);
      }
  }
  useEffect(()=>{
       
       GetAllCourse();
  },[])
  return (
    <div className={cx('container')}>
       <SidebarAlt  lbl={'manage'}/>   
       <ManageCourseContent courses={Courses}/>
    </div>
  )
}

export default Admin