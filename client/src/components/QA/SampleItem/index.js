import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let cx = classNames.bind(styles);

const Sample = ({icon,title,desc,handleQuestion,type}) => {


  return (
    <span className={cx("sample")} onClick={()=>{handleQuestion(type)}}>
    <FontAwesomeIcon icon={icon} className={cx("icon")} />
    <div className={cx("info")}>
      <span className={cx("title")}>{title && title}</span>
      <span className={cx("desc")}>{desc && desc}</span>
    </div>
  </span>
  )
}

export default Sample