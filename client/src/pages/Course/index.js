import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import CourseOverview from "../../components/CourseOverview";
import Sidebar from "../../components/Sidebar";

let cx = classNames.bind(styles);

const Course = () => {
  return (
    <div className={cx("container")}>
      <Sidebar lbl={'course'} />
      <CourseOverview />
    </div>
  );
};

export default Course;
