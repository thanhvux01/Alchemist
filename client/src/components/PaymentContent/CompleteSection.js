import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Button } from "@mui/material";
import { useContext } from "react";
import { PaymentContext } from "../../states/Pay";

let cx = classNames.bind(styles);

export function CompleteSection() {
  const Payment = useContext(PaymentContext);
  const {Course} = Payment;
  if(Course){
  return (
    <div className={cx("complete-section")}>
      <span className={cx("title")}>Tổng giá:</span>
      <div className={cx("product-price")}>
        <div className={cx("price-wrapper")}>
          <span>Giá gốc</span>
          <span className={cx("price")}>{Course.price.toLocaleString("en-US") || 0}</span>
        </div>
        <div className={cx("price-wrapper")}>
          <span>Giá ưu đãi</span>
          <span className={cx("price")}>{(Course.price*(1-Course.sale)).toLocaleString("en-US") || 0}</span>
        </div>
      </div>
      <div className={cx("total-price")}>
        <div className={cx("total-wrapper")}>
          <span>Tổng: </span>
          <span className={cx("price")}>{(Course.price*(1-Course.sale)).toLocaleString("en-US") || 0}</span>
        </div>
      </div>
      <div className={cx("alert")}>
        By completing your purchase you agree to these{" "}
        <span className={cx("hl")}>Terms of Service</span>.
      </div>
      <Button variant="contained" className={cx("btn-confirm")} onClick={Payment.PayCourse}>
        Xác nhận
      </Button>
      <span className={cx("bot-line")}>30-Day Money-Back Guarantee</span>
    </div>
  );
}}
