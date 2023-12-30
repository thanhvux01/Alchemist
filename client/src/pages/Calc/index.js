import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/Sidebar';
import CalcContent from '../../components/CalcContent';
let cx = classNames.bind(styles);

const Calc = () => {
  return (
    <div className={cx('container')}>
    <Sidebar  lbl={'calc'}/>   
    <CalcContent/>
 </div>
  )
}

export default Calc