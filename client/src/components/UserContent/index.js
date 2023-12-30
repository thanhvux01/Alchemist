import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper,Avatar,Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SendIcon from '@mui/icons-material/Send';
import SchoolIcon from '@mui/icons-material/School';
import UserInfo from '../UserInfo';
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);

const UserContent = ({user,SendData,handleLogoutDialog}) => {
  const Navigate = useNavigate();
  if(user){
  return (
    <div className={cx('container')}>
       <Paper className={cx('user-wrapper')}>
            <div className={cx('header')}>
            <Avatar sx={{ bgcolor: blue[500] }} className={cx('avatar')} >{user.username && user.username[0].toUpperCase()}</Avatar>
            </div>
            <div className={cx('detail')}>
            <label>{user.username && user.username  }</label>
             <div className={cx('user-info')}>
               
                <DateRangeIcon className={cx('icon')}/>
               <p>Joined {user.createdAt && user.createdAt.slice(0,10)}</p>
               <SendIcon className={cx('icon')}/>
               <p>{user.email && user.email}</p>
               <SchoolIcon className={cx('icon')}/>
               <p>{user.isAdmin && user.isAdmin ? "Admin" : "Normal User"}</p>
             </div>
             <div className={cx('category')}>
                   <Button variant='outlined' onClick={()=>{Navigate("/learn")}}>Khóa học</Button>
                   <Button variant='outlined' >Lịch sử</Button>
                   <Button variant='outlined' onClick={handleLogoutDialog}>Đăng xuất</Button>
                 {user.isAdmin &&  <Button variant='outlined' onClick={()=>{Navigate("/manage")}}>Admin Mode</Button> }
             </div>
            </div>
       </Paper>
       <UserInfo user={user} SendData={SendData} />
    </div>
  )
}};

export default UserContent