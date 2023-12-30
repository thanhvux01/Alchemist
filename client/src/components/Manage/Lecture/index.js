import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import {
  Paper,
  TextField,
  Switch,
  FormControlLabel
} from "@mui/material";
import { LessonTable } from "../Table";
import ManageBreadCrumb from "../Breadcrumb";
let cx = classNames.bind(styles);

const ManageLectureContent = ({ lecture }) => {
  if (lecture) {
    return (
      <div className={cx("container")}>
        <Paper className={cx("lecture-wrapper")}>
          <ManageBreadCrumb step="lecture"/>
          <form className={cx("lecture-form")}>
            <TextField
              InputLabelProps={{ shrink: true }}
              required
              id="course-name"
              label="Chương"
              defaultValue={lecture.name}
            />
           <FormControlLabel control={<Switch defaultChecked id="preview" />} label="Xem trước" />
          </form>
          <LessonTable lessons={lecture.lessons}/>
        </Paper>
      </div>
    );
  }
};
export default ManageLectureContent;
















{
  /* <FormControl sx={{  minWidth: 120 , maxWidth:200  }} disabled className={cx('category-select')}>
<InputLabel id="select-category">Thể loại</InputLabel>
<Select
  labelId="select-category"
  id="disable-select-category"
  value={"theory"}
  label="category"

>
     <MenuItem value="">
<em>None</em>
</MenuItem>
<MenuItem value={"theory"}>Lý thuyết</MenuItem>
<MenuItem value={"quiz"}>Câu hỏi</MenuItem>
<MenuItem value={"video"}>Video</MenuItem>
</Select>
<FormHelperText>Không thể thay đổi</FormHelperText>
</FormControl> */
}
