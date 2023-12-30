import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { chemistryGlass } from "../../assets/svg";
import { Chip, Stack, CircularProgress, Box, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useNavigate } from "react-router";

let cx = classNames.bind(styles);
const CourseItem = ({ level, name, id, owned }) => {
  const [Hover, SetHover] = useState(false);
  switch (level) {
    case "1":
      level = "novice";
      break;
    case "2":
      level = "intermediate";
      break;
    default:
      level = "novice";
  }
  const Navigate = useNavigate();
  return (
    <div
      className={cx("course-item")}
      onClick={() => {
        !owned && Navigate("/course/" + id);
      }}
    >
      <div
        className={cx("banner", level)}
        onMouseOver={() => {
          SetHover((state) => !state);
        }}
        onMouseOut={() => {
          SetHover((state) => !state);
        }}
      >
        <img src={chemistryGlass} />
        {!owned && Hover && (
          <div className={cx("hover")}>
            <span className={cx("view")}>{"Xem Thử"}</span>
          </div>
        )}
        {owned && (
          <div className={cx("hover")}>
            <span className={cx("view")}>{"Đã mua"}</span>
          </div>
        )}
      </div>
      <div className={cx("detail")}>
        <label className={cx("name")}>{name ? name : "Nghiên cứu"}</label>
      </div>
      <Stack direction="row" spacing={1}>
        <Chip icon={<TimelineIcon />} label="300hrs" variant="outlined" />
        <Chip icon={<LibraryBooksIcon />} label="50" variant="outlined" />
      </Stack>
    </div>
  );
};

export const YourCourseItem = ({ level, name, id, userdata }) => {
  const total = userdata.lessons.length || 0;
  let totalLearn = 0;
  if (userdata.lessons.length > 0) {
    totalLearn = userdata.lessons.reduce((number, lesson) => {
      if (lesson.isComplete) number++;
      return number;
    }, 0);
  }
  const [Hover, SetHover] = useState(false);
  switch (level) {
    case "1":
      level = "novice";
      break;
    case "2":
      level = "intermediate";
      break;
    default:
      level = "novice";
  }
  const Navigate = useNavigate();
  return (
    <div
      className={cx("course-item")}
      onClick={() => {
        console.log(userdata);
        userdata && Navigate("/learn/" + id + "/lesson/" + userdata.curLesson);
      }}
    >
      <div
        className={cx("banner", level)}
        onMouseOver={() => {
          SetHover((state) => !state);
        }}
        onMouseOut={() => {
          SetHover((state) => !state);
        }}
      >
        <img src={chemistryGlass} />
      </div>
      <div className={cx("detail")}>
        <label className={cx("name")}>{name ? name : "Nghiên cứu"}</label>
      </div>
      <Stack direction="row" spacing={2}>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={(totalLearn / total) * 100}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {(totalLearn / total) * 100}%
            </Typography>
          </Box>
        </Box>
        <Chip
          icon={<LibraryBooksIcon />}
          label={`${totalLearn}/${total}`}
          variant="outlined"
        />
      </Stack>
    </div>
  );
};

export default CourseItem;
