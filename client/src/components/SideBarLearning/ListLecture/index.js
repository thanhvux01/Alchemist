import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import LectureWrapper from "../LectureWrapper";
let cx = classNames.bind(styles);

const ListLecture = ({ lectures }) => {
  if (lectures) {
     
    return (
      <div className={cx("container")}>
        {lectures.map((item,i)=><LectureWrapper lecture={item} index={i} key={item.lectureID}/>)}
            
      </div>
    );
  }
};

export default ListLecture;
