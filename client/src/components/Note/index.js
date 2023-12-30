import React, { useState , useContext } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, keyframes } from "@mui/material";
import axios from "axios";
import { LessonContext } from "../../states";
import NoteItem from "./NoteItem";
import { configAxios } from "../../config";
import  { LinearProgress} from "@mui/material";
import { useParams } from "react-router";

let cx = classNames.bind(styles);

const Notes = () => {
  const data = useContext(LessonContext);
  const {Progress,Course} = data;
  const params = useParams();
  const [Wait,SetWait] = useState(false);
  const {courseid,lessonid} = params
  const [value, setValue] = useState("");
  const AddNote = async () => {
      try {
         SetWait((prev)=>!prev)
         await axios.post(`/user/add-note/${courseid}/${lessonid}`,{text:value},configAxios);
         data.GetProgress();
         SetWait((prev)=>!prev)
      } catch (error) {
         console.log(error);
      }
  }
  const Reset = async() => {
       try{
        setValue("")

       }catch(error){
          console.log(error)
       }
  }

  return (
    <div className={cx("container")}>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <div className={cx("btn-section")}>
         <Button variant="text" onClick={Reset}>Clear</Button>
         <Button variant="outlined" onClick={AddNote}>Lưu</Button>
      </div>
      <div className={cx('list-note')}>
           {Wait &&  <LinearProgress />}
           {Progress && Progress.lessons && Progress.lessons.map((lesson,i)=> lesson.note && <NoteItem text={lesson.note} index={i} key={lesson.id} id={lesson.id} />)}

      </div>
    </div>
  );
};

export default Notes;
