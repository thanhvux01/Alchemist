import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import ExpectItem from "../ExpectItem";
let cx = classNames.bind(styles);

export function Description({ description }) {
 
    return (
      <div className={cx("table")}>
        <div className={cx("title")}>Kiến thức chinh</div>
        <div className={cx("left")}>
          <ExpectItem name={"Knowledge"} />
          <ExpectItem name={"Chemistry"} />
        </div>
        <div className={cx("right")}>
          <ExpectItem name={"History"} />
          <ExpectItem name={"OverLook"} />
        </div>
        <p className={cx("desc")}>{description || ""}</p>
      </div>
    );
  
}
