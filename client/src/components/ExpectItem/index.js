import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import DoneIcon from '@mui/icons-material/Done';
let cx = classNames.bind(styles);


const ExpectItem = ({name}) => {
  return (
    <div className={cx('container')}>
      <DoneIcon/>
      {name && name}
    </div>
  )
}

export default ExpectItem