import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../storage/auth-context";
import Switch from "../../components/Auth/Switch";
import RightSigninBox from "../../components/Auth/RightSigninBox";
import MiddleBox from "../../components/Auth/MiddleBox";
import axios from "axios";
import RightRegisterBox from "../../components/Auth/RightRegisterBox";
let config = {
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,

}

let cx = classNames.bind(styles);

const Authentication = () => {

  const param = useParams();
  const Navigate = useNavigate();
  const [authState, setAuthState] = useState(param.switch);
  const {setUser,setLogged} = useContext(AuthContext);
  const Change = () => {
    setAuthState((prev) => {
      if (prev === "login") { 
        return "register";   
      } else if (prev === "register") {
        return "login";
      }
    });
  };
  const handleLogin = async (data) => {
     try{
      const user = await axios.post('/auth/login',data,config);
      setUser(user.data)
      localStorage.setItem('userData', JSON.stringify({ username :user.data.username, email:user.data.email }));
      Navigate('/hub');
      
     }catch(err){
        
        console.log(err);
     }
  }
  const handleRegister = async (data) => {
    try{
      await axios.post('/auth/register',data,config);
      Navigate("/success/verify");
      
     }catch(err){
        console.log(err);
     }
  }
  const handleSwitch = () => {
         if(param.switch!=="login" && param.switch!=="register"){
            Navigate("/auth/login")
            setAuthState("login");
         }
  }
  useEffect(()=>{
     handleSwitch();
  },[])
  return (
    <div className={cx("container")}>
      <Switch switch={Change} authState={authState}/>
      <MiddleBox/>
      {authState=="login" ? <RightSigninBox handleLogin={handleLogin} /> : <RightRegisterBox handleRegister={handleRegister}/> }
   
    </div>
  );
};

export default Authentication;
