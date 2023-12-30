import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../../components/Sidebar";
import UserContent from "../../components/UserContent";
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import CustomDialog from "./Dialog";
import { configAxios } from "../../config";
import { useNavigate } from "react-router";
let config = {
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
};
let cx = classNames.bind(styles);

const User = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [LogoutDialog, SetLogOutDialog] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };
  const GetUser = async () => {
    try {
      const user = await axios.get(
        "/user/get-user",
        config
      );
       
      setUser(user["data"]);
    } catch (err) {
       console.log(err);
    }
  };
  useEffect(() => {
    GetUser();
  }, []);

 const SendData = async (data) => {
    try{
      await axios.post('/user/update-user-user',data,config);
      handleDialogOpen();
    }catch(err){
       console.log(err)
    }
 }
 const handleLogoutDialog = async (data) => {
    SetLogOutDialog((prev)=>!prev)
}

const Logout = async (data) => {
  try{
    await axios.post("/auth/logout",{},configAxios);
    localStorage.clear();
    Navigate("/auth/login");
  }catch(err){
     console.log(err)
  }
}

  return (
    <div className={cx("container")}>
     <Sidebar />
     <UserContent user={user} SendData={SendData} handleLogoutDialog={handleLogoutDialog} /> 
     <CustomDialog open={open} handleDialogClose={handleDialogClose}/>
     <CustomDialog open={LogoutDialog} handleDialogClose={handleLogoutDialog} Logout={Logout}/>
    </div>
  );
};

export default User;
