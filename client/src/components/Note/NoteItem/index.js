import React , { useContext, useEffect, useState} from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { configAxios } from "../../../config";
import { LessonContext } from "../../../states";

let cx = classNames.bind(styles);
const NoteItem = ({ text ,index,id }) => {
const number = parseInt(index)+1;
const params = useParams();
const {courseid} = params;
const context = useContext(LessonContext);

const navigate = useNavigate();
const [LessonName , SetLessonName] = useState();
const [LectureName,SetLectureName] = useState();

const GetMoreInfo = async () => {
     try {
       const data = await axios.get(`/course/get-lesson/${courseid}/${id}`,configAxios);
       SetLessonName(data.data.name);
       SetLectureName(data.data.lectureName);
        
     } catch (error) {
        console.log(error)
     }
}
const MoveToLesson = async () => {
     context.GetLesson();
     navigate(`/learn/${courseid}/lesson/${id}`)
}

useEffect(()=>{
   GetMoreInfo();
},[])
  if (text) {
    return (
      <span className={cx("note")} onClick={MoveToLesson}>
        <div className={cx("top")}>
          <span className={cx("course-title")} >
          {number+"."} {LectureName && LectureName}
            <span className={cx("lesson-title")}>
              {LessonName && LessonName}
            </span>
          </span>
        </div>
        <div className={cx("bottom")} dangerouslySetInnerHTML={{__html:text}}></div>
      </span>
    );
  }
};

export default NoteItem;
