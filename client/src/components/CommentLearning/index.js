import React , {useContext, useState} from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Avatar, TextField, Button } from "@mui/material";
import { Send , Sort } from "@mui/icons-material";
import Comment from "./Comment";
import { LessonContext } from "../../states";

let cx = classNames.bind(styles);

const CommentLearning = ({comments}) => {
   const  [text,setText] = useState();
   const  [err,setErr] = useState(false)
   const comment = useContext(LessonContext);
   const onChangeText = (e) => {
         setText(e.target.value);
   }
   const SubmitComment = () => { 
         text ? comment.SubmitComment(text) : setErr(true);
       
   }
  return (
    <div className={cx("container")}>
      <div className={cx('row')}>
         <span className={cx('control')}>
             <span className={cx('total')}>
             <span>{`${comments && comments.length || 0}`}</span>
              Bình luận
             </span>
            <span className={cx('sort')}>
            <Sort className={cx('icon')}></Sort>
            Sắp xếp theo
         </span>
         </span>
      </div>
      <div className={cx("row", "your-comment")}>
        <div className={cx('info')}>
        <Avatar className={cx("avatar")}>N</Avatar>
        { !err &&
        <TextField
          id="comment"
          label="Viết bình luận..."
          type="search"
          variant="standard"
          value={text}
          onChange={onChangeText}
          className={cx("input")}
        />
          }{
            err &&
        <TextField
          id="comment"
          label="Viết bình luận..."
          type="search"
          variant="standard"
          value={text}
          onChange={onChangeText}
          className={cx("input",'err')}
          error
          helperText='Không được để trống'
        />
          }
        </div>
        <div className={cx("submit")}>
          <Button variant="text" className={cx('btn')} >Huỷ</Button>
          <Button variant="contained" endIcon={<Send />} className={cx('btn')} onClick={SubmitComment}> 
            Bình luận
          </Button>
        </div>
      </div>
      <div className={cx('list-comment')}>
           {
             comments && comments.length>0&& comments.map((comment)=>{
             
                  return <Comment content={comment}/>
             })
           }  
      </div>   
    </div>
  );
};

export default CommentLearning;
