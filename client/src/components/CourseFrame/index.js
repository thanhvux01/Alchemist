import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import CourseItem, { YourCourseItem } from '../CourseItem';
let cx = classNames.bind(styles);

const CourseFrame = ({content,type}) => {
  const {title,name,level,_id,owned,userdata} = content;
  

  if(type=='mylearn'){
    return (
      <div className={cx('container')}>
        <div className={cx('course-wrapper')}>
           <div className={cx('title')}>
             <label>{title}</label>
             <div className={cx('badge')}>
                   Favorite
             </div>    
           </div>
           <div className={cx('list-courses')}>
           <YourCourseItem level={level} name={name} id={_id} owned={owned} userdata={userdata}/>
           </div>    
        </div>
      </div>
    )
  }else{
    return (
      <div className={cx('container')}>
        <div className={cx('course-wrapper')}>
           <div className={cx('title')}>
             <label>{title}</label>
             <div className={cx('badge')}>
                   Favorite
             </div>    
           </div>
           <div className={cx('list-courses')}>
           <CourseItem level={level} name={name} id={_id} owned={owned}  />
           </div>    
        </div>
      </div>
    )
  }

}


export default CourseFrame