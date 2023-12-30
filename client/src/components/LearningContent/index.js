import React, { createContext, useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import {  Note, Search } from '@mui/icons-material';
import ListLecture from '../SideBarLearning/ListLecture';
import View from '../View';
import CommentLearning from '../CommentLearning';
import Notes from '../Note';
let cx = classNames.bind(styles);
const LearningContent = ({Lesson,Lectures}) => {

  const [Tool,SetTool] = useState("Note")
  const ChangeTool = (str) => {
      SetTool(str);
  }

  return (
    
    <div className={cx("content-wrapper")}>
      <div className={cx("content-data")}>
        <div className={cx("tool")}>
          <Search />
          <span>Overview</span>
          <span onClick={()=>{ChangeTool("Q&A")}}>Q&A</span>
          <span onClick={()=>{ChangeTool("Note")}}>Ghi chú</span>
          <span>Thông báo</span>
          <span>Reviews</span>
        </div>
        <View lesson={Lesson} />
       {Tool=="Q&A" && <CommentLearning comments={Lesson.comments}/> }
       {Tool=="Note" && <Notes/>}
      </div>
      <div className={cx("control-data")}>
        <span className={cx("header")}>
          <span className={cx("title")}>Danh sách</span>
          <span className={cx("close")}>X</span>
        </span>
        <ListLecture lectures={Lectures} />
      </div>
    </div>

  );
}

export default LearningContent