import React , {useState,useEffect} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { BannerIcon2 } from '../../assets/png';
import { Typography,Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { configAxios } from '../../config';
let cx = classNames.bind(styles);

const Verify = () => {
    const Navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [seconds, setSeconds] = useState(10);
    const [Success , setSuccess] = useState(false);
    const token = searchParams.get("token");

    useEffect(() => {
      if (seconds === 0) return;
      const timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    }, [seconds]); 

   const handleVerify = async () => {
          try{
            await axios.get(`/auth/verify/?token=${token}`,configAxios);
            setSuccess(true);
          }catch(err){
          Navigate("/error")
          console.log(err);
          }
   }
   useEffect(()=>{
        handleVerify();
   },[])
  if(Success){
  return (
    <div className={cx('container')}>
        <span className={cx('img')}>
             <img src={BannerIcon2} />
        </span>
        <Typography fontSize={"1.2rem"}>Xác thực thành công!</Typography>
        <Typography fontSize={"1.2rem"}> Tự động về trang chủ sau ...{seconds}s</Typography>
        <Button onClick={()=>{Navigate("/auth/login")}}>Về trang đăng nhập</Button>
    </div>
  )
  }
 }


export default Verify