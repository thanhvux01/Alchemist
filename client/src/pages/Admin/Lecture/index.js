import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { SidebarAlt } from '../../../components/Sidebar';
import { configAxios } from '../../../config';
import ManageLectureContent from '../../../components/Manage/Lecture';
import { useParams } from 'react-router';

let cx = classNames.bind(styles);

const ManageLecture = () => {
  const [Lecture,setLecture] = useState();
  const params = useParams();
  const {courseid,lectureid} = params
  const GetLecture = async () => {
      try{
           const lecture =  await axios.get(`/course/get-lecturev2/${courseid}/${lectureid}`,configAxios);
           setLecture(lecture.data);
      }catch(err){
      console.log(err);
      }
  }
  useEffect(()=>{
     GetLecture();
  },[])
  return (
    <div className={cx('container')}>
       <SidebarAlt  lbl={'manage'}/>   
       <ManageLectureContent lecture={Lecture}/>
    </div>
  )
}

export default ManageLecture