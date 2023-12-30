import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper } from '@mui/material';
import { useParams } from 'react-router';
import {Typography}  from '@mui/material';
import MultipleContent from '../MultipleChoice';
import axios from "axios";
let config = {
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,

}
let cx = classNames.bind(styles);

const LessonContent = () => {
  const param = useParams();
  const {id,index} = param;
  const [lesson,setLesson] = useState();
  const GetLesson = async () =>{
       const data = await axios.get(`/course/get-lesson-id/${id}/${index}`,config);
       setLesson(data['data']['lesson']);
      //  console.log(data['data']['lesson']);
  }
  useEffect(()=>{
    GetLesson();
  },[])
  return (
    <div className={cx('container')}>
       <Paper className={cx('content-wrapper')}>
              {lesson && lesson.content.category == "theory" && <div className={cx('container')}>
                   <label className={cx('title')}>Lý Thuyết</label>
                     {lesson['content']['data'].map((item)=>{
                             if(item.type=="text"){
                                return <Typography>{item.content}</Typography>
                             }else if(item.type == "img") {
                                 return <img src={item.content} className={cx('img')}/>
                             }
                     })}
                </div>}
                {lesson && lesson.content.category !== "theory" && <div className={cx('container')}>
                   <label className={cx('title')}>Trắc Nghiệm</label>
                   <MultipleContent data={lesson.content.data}/>
                    
                </div>
                }

       </Paper>
    </div>
  )
}

export default LessonContent