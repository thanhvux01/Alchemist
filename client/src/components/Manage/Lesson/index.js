import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import {
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import { VisuallyHiddenInput } from "../../HiddenInput";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import Quill from "../../Quill";
import ManageBreadCrumb from "../Breadcrumb";
import AlertSuccess from "../../Alert";
import { QuestionTable } from "../Table";
let cx = classNames.bind(styles);

const ManageLessonContent = ({
  lesson,
  updateTheoryLesson,
  success,
  setSuccess,
  pushQuestion,
  updateQuizLesson,
  setLesson,
  updateVideoLesson,
  handleVideoUrl,
}) => {
  const [doc, setDoc] = useState();
  useEffect(() => {
    //set data for edit doc
    if (lesson.data && lesson.data.doc !== undefined) setDoc(lesson.data.doc);
    //set name
  }, [lesson]);

  if (lesson) {
    return (
      <div className={cx("container")}>
        <Paper className={cx("lesson-wrapper")}>
          <ManageBreadCrumb step="lesson" />
          <form className={cx("lesson-form")}>
            <TextField
              InputLabelProps={{ shrink: true }}
              required
              id="course-name"
              label="Tên"
              value={lesson.name}
              onChange={(e) => {
                setLesson((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
            />
            <FormControl
              sx={{ minWidth: 120, maxWidth: 200 }}
              disabled
              className={cx("category-select")}
            >
              <InputLabel id="select-category">Thể loại</InputLabel>
              <Select
                labelId="select-category"
                id="disable-select-category"
                value={lesson.category}
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
            </FormControl>
          </form>
          {lesson.category == "theory" && (
            <>
              <Quill value={doc} setValue={setDoc} />
              <div className={cx("btn-section")}>
                <Button
                  variant="contained"
                  onClick={() => {
                    updateTheoryLesson(doc);
                  }}
                >
                  Áp dụng
                </Button>
                <Button variant="outlined">Reset</Button>
              </div>
            </>
          )}
          {lesson.category == "quiz" && (
            <div className={cx("quiz-edit-section")}>
              <QuestionTable
                questions={lesson.data.questions}
                setLesson={setLesson}
              />
              <div className={cx("btn-section")}>
                <Button onClick={updateQuizLesson} variant="contained">
                  Lưu
                </Button>
                <Button onClick={pushQuestion} variant="contained">
                  Tạo
                </Button>
                <Button variant="outlined">Reset</Button>
              </div>
            </div>
          )}
          {lesson.category == "video" && (
            <div className={cx("video-edit-section")}>
           <TextField
              InputLabelProps={{ shrink: true }}
              required
              id="course-name"
              label="URL"
              value={lesson.data && lesson.data.url || ""}
              onChange={handleVideoUrl}
              ></TextField>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" id="img" />
              </Button>
              <div className={cx("btn-section")}>
           
                <Button onClick={updateVideoLesson} variant="contained" >
                  Lưu
                </Button>
                <Button  variant="outlined">
                  Reset
                </Button>
              </div>
            </div>
          )}
          <AlertSuccess open={success} setOpen={setSuccess} />
        </Paper>
      </div>
    );
  }
};
export default ManageLessonContent;
