import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { Delete as DeleteIcon , Edit as EditIcon , PersonalVideo as PersonalVideoIcon ,  } from "@mui/icons-material";
import { useContext } from "react";
import { ManageCourseContext } from "../../../states";
import { useNavigate } from "react-router";

export default function LectureTable({ lectures }) {
  const Navigate = useNavigate();
  const Course = useContext(ManageCourseContext);
  if (lectures) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Chương</TableCell>
              <TableCell align="right">Công khai</TableCell>
              <TableCell align="right">Tổng bài</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lectures.map((lecture, index) => (
              <TableRow
                key={lecture._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TextField
                    id="cell-name"
                    value={lecture.name || ""}
                    variant="standard"
                    onChange={(e) => {
                      Course.changeLectureName(index, e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Switch
                    checked={lecture.public}
                    onChange={(e) => {
                      Course.switchPublic(index);
                    }}
                  />
                </TableCell>
                <TableCell align="right">{lecture.lessons.length}</TableCell>
                <TableCell align="right">
                <IconButton aria-label="delete" onClick={()=>{Navigate(`${lecture._id}`)}}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={()=>{Course.DeleteLecture(index)}}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export function LessonTable({ lessons}) { 
  const Navigate = useNavigate();
  if (lessons) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên</TableCell>
              <TableCell align="right">Loại</TableCell>
              <TableCell align="right">Thời gian</TableCell>
              <TableCell align="right">Bình luận</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessons.map((lesson, index) => (
              <TableRow
                key={lesson._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TextField
                    id="cell-name"
                    value={lesson.name || ""}
                    variant="standard"
                    onChange={(e) => {
                   
                    }}
                  />
                </TableCell>
                <TableCell align="right">{lesson.category == "theory" ? "Lý Thuyết" : lesson.category == "quiz"  ? "Câu hỏi" : "Clip" }</TableCell>
                <TableCell align="right"> 3 Phút</TableCell>
                <TableCell align="right">{lesson.comments && lesson.comments.length}</TableCell>
                <TableCell align="right">
                <IconButton aria-label="delete" onClick={()=>{Navigate(`${lesson._id}`)}}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export function QuestionTable({ questions , setLesson  }) { 
  const handleChange = (e,key,index) => {
    setLesson((prev)=>{let pref = {...prev};
    prev.data.questions[index][key] = e.target.value ;
     return pref
    })};
  const handleDelete = (index) => {
    setLesson((prev)=>{
    let pref = {...prev};
    prev.data.questions.splice(index,1)
    return pref;
  })};
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên</TableCell>
              <TableCell align="left">A1</TableCell>
              <TableCell align="left">A2</TableCell>
              <TableCell align="left">A3</TableCell>
              <TableCell align="left">A4</TableCell>
              <TableCell align="left">Đáp án</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions && questions.map((question, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TextField
                    id="cell-name"
                    value={question.name || ""}
                    variant="standard"
                    onChange={(e)=>{handleChange(e,"name",index) }}
                  />
                </TableCell>
                <TableCell align="left"><TextField value={question.a1}   variant="standard"  onChange={(e)=>{handleChange(e,"a1",index) }}/></TableCell>
                <TableCell align="left"><TextField value={question.a2}   variant="standard" onChange={(e)=>{handleChange(e,"a2",index) }}/></TableCell>
                <TableCell align="left"><TextField value={question.a3 }   variant="standard" onChange={(e)=>{handleChange(e,"a3",index) }} /></TableCell>
                <TableCell align="left"><TextField value={question.a4 }   variant="standard" onChange={(e)=>{handleChange(e,"a4",index) }}/></TableCell>
                <TableCell align="left"><TextField value={question.result }  variant="standard"  onChange={(e)=>{handleChange(e,"result",index) }}/></TableCell>
                <TableCell align="left" >
                  <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
