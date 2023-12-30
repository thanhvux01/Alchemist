import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router";
import { Stack } from "@mui/material";
let cx = classNames.bind(styles);
const CourseAccordion = ({ lectures }) => {
  return (
    <div className={cx("container")}>
      {lectures && lectures.map((lecture) => 
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {lecture.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={cx("detail")}>
              <Stack spacing={2}>
                 {lecture.lessons.map((lesson,i)=><p>{i+1 +"." +lesson.name}</p>)}
              </Stack>

            </AccordionDetails>
          </Accordion>
        )}
    </div>
  );
};

export default CourseAccordion;
