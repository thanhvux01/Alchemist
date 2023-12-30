import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper } from '@mui/material';
import { scientist_working2 } from '../../assets/svg';
import CalcAtomMass from '../CalcAtomMass';
import CalcHolder from '../CalcHolder';
import Banner from '../Banner';
import CalcAtom from '../CalcAtom';
let cx = classNames.bind(styles);

const CalcContent = () => {
  const [Mode,SetMode] = useState();
  const handleMode = (data) => {
       SetMode(data);
  }
  return (
    <div className={cx('container')}>
        <Banner color={'blue'} img={scientist_working2} title={'Calculator'} description={'Công cụ tính toán hóa học'}/>
        <CalcHolder handleMode={handleMode}/>
       {Mode==='AC' && <CalcAtom/>} 
       {Mode==='AMC' && <CalcAtomMass/>}
    </div>
  )
}

export default CalcContent