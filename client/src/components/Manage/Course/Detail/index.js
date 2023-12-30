import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { styled } from "@mui/material/styles";
import {
  Paper,
  TextField,
  Input,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
  Box,
  Alert,
  IconButton,
  Collapse,

} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AddCircleOutlineRounded ,Close } from "@mui/icons-material";
import LectureTable from "../../Table";
import ManageBreadCrumb from "../../Breadcrumb";
let cx = classNames.bind(styles);
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const DetailCourseContent = ({ course , success , switchSuccess , submitChange , setCourse ,addLecture}) => {
  return (
    <div className={cx("container")}>
      <Paper className={cx("course-wrapper")}>
        <ManageBreadCrumb step="course"/>
        <form className={cx("course-form")}>
          <TextField
            InputLabelProps={{ shrink: true }}
            required
            id="course-name"
            label="Tên khoá học"
            value={course.name}
            onChange={(e)=>{setCourse((prev)=>{
               return {...prev,name:e.target.value}
            })}}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            multiline
            id="desc"
            label="Mô tả khoá học"
            value={course.description}
            onChange={(e)=>{setCourse((prev)=>{
               return {...prev,description:e.target.value}
            })}}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            type="number"
            id="price"
            label="Giá tiền"
            value={course.price}
            onChange={(e)=>{setCourse((prev)=>{
              return {...prev,price:e.target.value}
           })}}
          />
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" id="img" />
          </Button>
        </form>
        <LectureTable lectures={course.lectures} />
        <span className={cx("btn-section")}>
        <Button variant="contained" onClick={submitChange} >
             Áp dụng
          </Button>
          <Button variant="outlined" startIcon={<AddCircleOutlineRounded />} onClick={addLecture} >
             Thêm
          </Button>
        </span>
        <span className={cx('new-lecture-section')}>
     
        </span>
        <span className={cx('alert-section')}>
        <Box sx={{ width: '100%' }}>
      <Collapse in={success}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                 switchSuccess();
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Thay đổi thành công
        </Alert>
      </Collapse>
    </Box>
        </span>
      </Paper>
    </div>
  );
};

export default DetailCourseContent;
