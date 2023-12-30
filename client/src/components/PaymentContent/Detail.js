import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Stack } from "@mui/material";
import { useContext } from "react";
import { PaymentContext } from "../../states/Pay";
let cx = classNames.bind(styles);

const Detail = () => {
  const Payment = useContext(PaymentContext);
  const { Course } = Payment;
  if (Course) {
    return (
      <React.Fragment>
        <span className={cx("detail")}>Chi tiết đơn hàng</span>
        <Stack direction={"row"} className={cx("order-item")}>
          <img src={Course.img || "https://placehold.co/400" } />
          <label className={cx("name")}>{Course.name}</label>
        </Stack>
      </React.Fragment>
    );
  }
};

export default Detail;
