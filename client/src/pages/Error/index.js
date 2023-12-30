import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { P404 } from '../../assets/png';
import { Typography,Button } from '@mui/material';
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);

const NotFound = () => {
    const Navigate = useNavigate();
  return (
    <div className={cx('container')}>
        <span className={cx('img')}>
             <img src={P404} />
        </span>
        <Typography fontSize={"1.2rem"}>Oop có vẻ trang này hiện tại không có sẵn !</Typography>
        <Button onClick={()=>{Navigate("/hub")}}>Về trang chủ</Button>
    </div>
  )
}

export default NotFound