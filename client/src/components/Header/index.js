import React from 'react'
import { Paper } from '@mui/material'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { logoWithText } from '../../assets/svg';
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);
const Header = ({type,title}) => {
  const navigate = useNavigate();
  const GoToHome = () => {
        navigate('/hub')
  }
  const GoToLearning = () => {
    navigate('/learn')
}

  if(type=="payment"){
    return (
      <Paper className={cx('header')} elevation={3}>
         <span className={cx('logo')} onClick={GoToHome}><img src={logoWithText}></img></span>
      </Paper>
    )
  }
  else{
    return (
      <div className={cx('header-wrapper')}>
          <span className={cx('logo')} onClick={GoToLearning}><img src={logoWithText}></img></span>
           <span className={cx('title')}>
              {title}
           </span>
      </div>
    )
  }
}

export default Header

