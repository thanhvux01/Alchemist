import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { LockPersonRounded , CreditCard as CreditCardIcon} from "@mui/icons-material";
import PaymentBar from "./PaymentBar";
import { useState } from "react";
import CardForm from "./CardForm";
import { Stack } from "@mui/material";
import Detail from "./Detail";
let cx = classNames.bind(styles);

export function PaymentSection() {
   const [checked,setChecked] = useState(true);
   const handleChecked = (e) => {
       setChecked((prev)=>!prev);
   }
  return (
    <div className={cx("detail-section")}>
      <div className={cx("title")}>
        <span>Kiểm tra</span>
      </div>
      <div className={cx("payment-section")}>
        <span className={cx('title-area')}>
        <h1>Phương thức thanh toán</h1>
        <span className={cx("secure")}>
          <span>Kết nối bảo mật</span>
          <LockPersonRounded />
        </span>
        </span>
        <div className={cx('select-section')}>
          <div className={cx('payment-holder')}>
          <div className={cx('payment-wrapper')}>
          <PaymentBar variant="card" handleChecked={handleChecked} checked={checked} />
          <PaymentBar variant="momo" handleChecked={handleChecked} checked={!checked} />
          <CardForm on={checked}/>   
          </div>
          </div>
        </div>
      </div>
      <Detail/>
    </div>
  );
}
