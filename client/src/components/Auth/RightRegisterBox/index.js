import React, { useState } from 'react'
import styles from './styles.module.scss';
import { faUser ,faLock , faMailReply} from '@fortawesome/free-solid-svg-icons'
import CustomInput from '../../CustomInput';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);


const RightRegisterBox = ({handleRegister}) => {
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [password2,setPassword2] = useState();
  const [email,setEmail] = useState();
  const [pwdError , setPwdError ] = useState();
 
  const handleUsername = (event) => {
     setUsername(event.target.value);
       
  }
 const handlePassword = (event) => {
  setPassword(event.target.value);
 }
 const handlePassword2 = (event) => {
    setPassword2(event.target.value);
   }
 const handleEmail = (event) => {
    setEmail(event.target.value);
   }
  return (
    <div className={cx('right-card')}>
            <p>Already have a account ? <i>Signin</i></p>
            <CustomInput title="Username" placeholder="myusername " className={cx('input')} icon={faUser} onChange={handleUsername}/>
            <CustomInput title="Email" placeholder="myemail " className={cx('input')} icon={faMailReply} onChange={handleEmail} type={'email'}/>
            <CustomInput title="Password" placeholder="mypassword " className={cx('input')} icon={faLock} onChange={handlePassword} type={'password'}/>
            <button className={cx('btn')} onClick={(e)=>{
                 e.preventDefault();
                 handleRegister({username:username,password:password,email:email});
                
            }} type='submit'>Sign up</button>
        </div> 
  )
}

export default RightRegisterBox