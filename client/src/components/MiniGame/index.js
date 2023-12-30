import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Banner from "../Banner";
import CourseFrame from "../CourseFrame";
import { BannerIcon3 } from "../../assets/png";
import axios from "axios";
import PlayCard from "../Play";
let config = {
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
};
let cx = classNames.bind(styles);

const MinigameContent = () => {

  return (
    <div className={cx("container")}>
      <Banner
        color={"purple"}
        img={BannerIcon3}
        
        title={"Danh sách game"}
        description={"Chơi mini game tại đây"}
        className={cx('myLearnBanner')}
      />
      <div className={cx("main-content")}>
         <PlayCard/>
      </div>
    </div>
  );
};

export default MinigameContent;
