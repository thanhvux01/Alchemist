import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { scientist } from '../../../assets/svg';
let cx = classNames.bind(styles);
const MiddleBox = () => {
  return (
    <div className={cx('middle-card')}>
    <h2>Signup Now</h2>
    <img src={scientist}/>
</div>
  )
}

export default MiddleBox