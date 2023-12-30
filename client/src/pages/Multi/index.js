import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/Sidebar';
import MultipleContent from '../../components/MultipleChoice';
let cx = classNames.bind(styles);


const Multi = () => {
  return (
    <div className={cx('container')}>
        <Sidebar/>
        <MultipleContent/> 
    </div>
  )
}

export default Multi