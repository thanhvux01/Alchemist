import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { TextField, Stack } from "@mui/material";
let cx = classNames.bind(styles);

const CardForm = ({on}) => {
 if(on){
  return (
    <div className={cx("form-wrapper")}>
      <TextField
        label="Tên chủ thẻ"
        id="owner"
        required
        className={cx("field-med")}
        placeholder={"Nguyễn Văn A"}
      />
      <TextField
        label="Số thẻ"
        id="card-number"
        required
        className={cx("field-med")}
        placeholder={"1234 5678 9012 3456"}
      />
      <Stack direction={"row"} gap={"10px"}>
        <TextField
          label="Ngày hết hạn"
          id="exp-date"
          type="number"
          required
          placeholder="MM/YY"
          className={cx("field-short")}
        />
        <TextField
          label="CVC/CVV"
          id="CVC"
          type="number"
          required
          placeholder="CVC"
          className={cx("field-short")}
        />
      </Stack>
    </div>
  );
}};

export default CardForm;
