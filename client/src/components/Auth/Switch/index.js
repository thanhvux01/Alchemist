import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faAddressCard,
  faUser,
  faLock,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { logo } from "../../../assets/svg";
let cx = classNames.bind(styles);

const Switch = (props) => {

  let line_class = {
    "line-move": true,
    bottom: props.authState == "login" ? true : false,
    top: props.authState == "register" ? true : false,
  };
  
  return (
    <div className={cx("left-card")}>
      <div className={cx("icon-box")}>
        <div className={cx("icon")}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div
        className={cx("icon-box", "long")}
        onClick={() => {
          line_class.bottom = false;
          line_class.top = true;
          props.switch();
        }}
      >
        <div className={cx("icon")}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </div>
        <br />
        <div className={cx("text")}>Đăng Ký</div>
      </div>
      <div
        className={cx("icon-box", "long")}
        onClick={() => {
          line_class.bottom = true;
          line_class.top = false;
          props.switch();
        }}
      >
        <div className={cx("icon")}>
          <FontAwesomeIcon icon={faAddressCard} />
        </div>
        <br />
        <div className={cx("text")}>Đăng nhập</div>
      </div>
      <div className={cx(line_class)}></div>
    </div>
  );
};

export default Switch;
