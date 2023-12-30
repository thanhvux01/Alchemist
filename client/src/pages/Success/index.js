import React , {useState,useEffect} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { P404, Success as SuccessImage } from '../../assets/png';
import { Typography,Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
let cx = classNames.bind(styles);

const Success = () => {
    const Navigate = useNavigate();
    const params = useParams();
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
      if (seconds === 0) return;
      const timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    }, [seconds]); 

    const {variant} = params;
  if(variant=="order"){
  return (
    <div className={cx('container')}>
        <span className={cx('img')}>
             <img src={SuccessImage} />
        </span>
        <Typography fontSize={"1.2rem"}>Thanh toán thành công hoá đơn đã được gửi qua mail của bạn !</Typography>
        <Button onClick={()=>{Navigate("/learn")}}>Về trang học tập</Button>
    </div>
  )
}else if(variant=="verify"){
  return (
    <div className={cx('container')}>
        <span className={cx('img')}>
             <img src={SuccessImage} />
        </span>
        <Typography fontSize={"1.2rem"}>Vui lòng check mail để xác thực tài khoản!</Typography>
        <Typography fontSize={"1.2rem"}> sau {seconds} để gửi lại link</Typography>
        <Button >Gửi lại mail xác minh</Button>
    </div>
  )
}

}

export default Success