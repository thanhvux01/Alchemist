import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Banner from "../Banner";
import CourseFrame from "../CourseFrame";
import { BannerIcon2 } from "../../assets/png";
import axios from "axios";
let config = {
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
};
let cx = classNames.bind(styles);

const LearnContent = () => {
  const [courses, setCourse] = useState();
  const GetCourses = async () => {
    try {
      const data = await axios.get("/course/get-owned-course", config);
      setCourse(data["data"]);
      
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetCourses();
  }, []);
  return (
    <div className={cx("container")}>
      <Banner
        color={"purple"}
        img={BannerIcon2}
        title={"Khoá học của bạn"}
        description={"Quản lý nội dung học tập ở đây"}
        className={cx('myLearnBanner')}
      />
      <div className={cx("main-content")}>
        {courses &&
          courses.map((item,i) => {
            return <CourseFrame key={item._id} content={item} type='mylearn' />;
          })}
      </div>
    </div>
  );
};

export default LearnContent;
