import React, { useState } from 'react'
import styles from './styles.module.scss';
import { faUser ,faLock , faAt} from '@fortawesome/free-solid-svg-icons'
import CustomInput from '../../CustomInput';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);


const RightSigninBox = ({handleLogin}) => {
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
 
  const handleUsername = (event) => {
     setUsername(event.target.value);
       
  }
 const handlePassword = (event) => {
  setPassword(event.target.value);
 }
  return (
    <div className={cx('right-card')}>
            <p>Don't have account ? <i>Signup</i></p>
            <CustomInput title="Username" placeholder="myusername " className={cx('input')} icon={faUser} onChange={handleUsername}/>
            <CustomInput title="Password" placeholder="mypassword " className={cx('input')} icon={faLock} onChange={handlePassword} type={'password'}/>
            <button className={cx('btn')} onClick={()=>{
                 handleLogin({username:username,password:password})
                 
            }}>Sign in</button>
        </div> 
  )
}

export default RightSigninBox