import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/Sidebar';
import LessonContent from '../../components/LessonContent';
let cx = classNames.bind(styles);


const Lesson = () => {
  
  return (
    <div className={cx('container')}>
        <Sidebar/>
        <LessonContent/>     
    </div>
  )
}

export default Lesson