import React,{useState,useEffect} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Banner from '../Banner';
import { BannerIcon } from '../../assets/png';
import axios from 'axios';
import CourseFrame from '../CourseFrame';
let config = {
  baseURL : "http://localhost:5000/api",
  withCredentials : true,
}
let cx = classNames.bind(styles);

const HubContent = () => {
  const [courses,setCourse] = useState();
  const GetCourses = async () => {
    try{
         const data = await axios.get("/course/get-all-course",config);
         setCourse(data['data']);
    }catch(err){
        console.log(err);
    }
 }
 useEffect(()=>{
   GetCourses();
 },[])
  return (
    <div className={cx('container')}>
      <Banner color={'blue'} img={BannerIcon} title={'Chemistry Lesson'} description={'Khóa học hóa nhanh và hiệu quả'}/>
      <div className={cx('content')}>
      { courses &&  courses.map((item,i)=>{
          if(item.level==1)
          return <CourseFrame content={item} key={item._id}/>
     }) }
      </div>
      <div className={cx('content')}>
      { courses &&  courses.map((item)=>{
          if(item.level==2)
          return <CourseFrame content={item} key={item._id}/>
     }) }
      </div>
  
    </div>
  )
}

export default HubContent;