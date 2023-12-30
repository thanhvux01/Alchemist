import React, { useEffect , useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Avatar } from "@mui/material";
import axios from "axios";
import { configAxios } from "../../../config";
import dayjs from 'dayjs'
let cx = classNames.bind(styles);

const Comment = ({ content }) => {
  const[User,SetUser]= useState({});
  const date = dayjs(content.createdAt);
  const GetUserInfo = async () => {
    try {
      const user = await axios.get(
        `/user/get-user-public/${content.user}`,
        configAxios
      );
      SetUser(user.data);
      console.log(user)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetUserInfo();
  }, []);
  if(User){
  return (
   
    <div className={cx("comment-wrapper")}>
      <span className={cx("content")}>
        <Avatar>N</Avatar>
        <div className={cx("info")}>
          <span className={cx("username")}>
           {User.username}  <span className={cx("time")}>{date.format('DD/MM/YY')}</span>
          </span>
          <span className={cx("text")}>{content.text}</span>
        </div>
        <div className={cx("like")}></div>
      </span>
    </div>
  );
  }
};

export default Comment;
