
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Paper} from "@mui/material";
import CourseAccordion from "../CourseAccordion";
import { scientist_working } from "../../assets/svg";
import { useParams } from "react-router";
import axios from "axios";
import { Description } from "./Description";
import { PaymentSection } from "./Payment";
let config = {
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
};

let cx = classNames.bind(styles);


const CourseOverview = ({}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [Course, setCourse] = useState();

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  const param = useParams();
  const id = param.id;
  const GetCourseData = async () => {
    try {
      const data = await axios.get(`/course/get-course/${id}`, config);
      setCourse(data["data"]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetCourseData();
  }, []);

  if (Course) {
    return (
      <div className={cx("container")}>
        <Paper className={cx("detail-course-wrapper")}>
          <div className={cx("overview-wrapper")}>
            <div className={cx("info")}>
              <div className={cx("title")}>
                {/* <label>{title && title}</label>
          <p>{description && description}</p> */}
                <img
                  src={scientist_working}
                  className={cx("img")}
                  alt="scientist"
                />
              </div>
                <Description description={Course.description} />
            </div>
            <PaymentSection price={Course.price} id={Course._id} sale={Course.sale} />
          </div>
          <div className={cx("list-items")}>
            {Course && <CourseAccordion lectures={Course.lectures} />}
          </div>
        </Paper>
      </div>
    );
  }
};

export default CourseOverview;



  