import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let cx = classNames.bind(styles);
const CustomInput = (props) => {
  return (
    <div className={cx('wrapper',props.className)}>
        <label className={cx('title')}>
            {props.title}
        </label>
        <div className={cx('input-wrapper')}>
        <input className={cx('input')} placeholder={props.placeholder} type={props.type} onChange={(e)=>{
          props.onChange(e);
        }}/>
        <FontAwesomeIcon icon={props.icon} />
        </div>
    </div>
  )
}

export default CustomInput