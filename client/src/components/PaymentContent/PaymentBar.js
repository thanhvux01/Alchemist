import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import {  CreditCard as CreditCardIcon } from "@mui/icons-material";
import { Radio, Stack ,Checkbox} from "@mui/material";

import { mastercard,momo, visa } from "../../assets/svg";
let cx = classNames.bind(styles);
const PaymentBar = ({ variant , checked , handleChecked }) => {
    if (variant === "card") {
      return (
        <Stack direction={"row"} className={cx("icon-wrapper")}>
          <Checkbox value="card "checked={checked} onClick={handleChecked}/>
          <span className={cx("icon")}><CreditCardIcon /></span>
          <label>Credit/DebitCard</label>
          <span className={cx("logo-wrapper")}>
            <span className={cx("logo")}><img src={visa} /></span>
            <span className={cx("logo")}><img src={mastercard} /></span>
          </span>
        </Stack>
      );
    } else {
      return (
        <Stack direction={"row"} className={cx('icon-wrapper')}>
        <Checkbox value="momo "checked={checked} onClick={handleChecked}/>
        <span className={cx("logo","momo")}><img src={momo}/></span>
        <label>Momo</label>
       </Stack>
      )
    }
  };
  
  export default PaymentBar;