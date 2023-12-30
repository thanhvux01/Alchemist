import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Send, ArrowDownward, RestartAlt } from "@mui/icons-material";
import styles from "./styles.module.scss";
import { Select, MenuItem } from "@mui/material";
import classNames from "classnames/bind";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import MathComponent from "../../Math";
import { arrayOfElement } from "../../../storage/arrayOfElement";
let cx = classNames.bind(styles);

export const ModelQuestion = ({ send }) => {
  const [Total, SetTotal] = useState();
  const [NonElectric, SetNonElectric] = useState();
  
  const HandleTotal = async (e) => {
    SetTotal(e.target.value);
  };
  const HandleNonElectric = async (e) => {
    SetNonElectric(e.target.value);
  };
  const HandleSend = async () => {
    send(Total, NonElectric);
  };
  const ResetForm = async () => {
    SetTotal("");
    SetNonElectric("");
  };

  return (
    <span className={cx("text-field")}>
      <p>
        Lưu ý: Lưu ý: Z = số proton (p) = số electron (e) = E , nguyên từ khối
        (A) = A , Tổng hạt S
      </p>

      <MathComponent equation={"Công thức tính nhanh Z = $ (S+A) \\over 4$"} />

      <span className={cx("input-section")}>
        Cho tổng hạt là :{" "}
        <TextField
          variant="standard"
          className={cx("input")}
          value={Total}
          onChange={HandleTotal}
        />
        và hạt không mang điện là :{" "}
        <TextField
          variant="standard"
          className={cx("input")}
          value={NonElectric}
          onChange={HandleNonElectric}
        />{" "}
        vậy X là
      </span>
      <span className={cx("submit-section")}>
        <Button
          variant="outlined"
          endIcon={<RestartAlt />}
          className={cx("btn")}
          onClick={ResetForm}
        >
          Xoá
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowDownward />}
          onClick={HandleSend}
          className={cx("btn")}
        >
          Gửi
        </Button>
      </span>
    </span>
  );
};

export const ModelQuestion2 = ({ send }) => {
  const [Element, SetElement] = useState("");
  const handleChange = (e) => {SetElement(e.target.value);};
  const ResetForm = () => {SetElement("")};
  const arr = arrayOfElement;
  const HandleSend = () => {
      send(Element);
  };
  return (
    <span className={cx("text-field")}>
      <p>
        Cách viết cấu hình electron nguyên tử được quy ước như sau: Số thứ tự
        lớp electron được ghi bằng các chữ số 1, 2, 3,… Phân lớp được biểu diễn
        bằng các chữ cái thường như s, p, d, f Số electron trong một phân lớp
        được ghi bằng số phía trên bên phải của phân lớp ấy như s2, p6…
        Ví dụ:
        <p>Heli có cấu hình electron là <MathComponent equation={"$1s^2$"} /> </p>
       <p>Kali có cấu hình electron là <MathComponent equation={"$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 $"} /></p>
      </p>
      <p>Tìm cấu hình electron của nguyên tử sau đây</p>
      <Select
        value={Element}
        label="element"
        className={cx("select")}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {arr.map((item)=><MenuItem value={item}>{item}</MenuItem>)}
      </Select>
      <span className={cx("submit-section")}>
        <Button
          variant="outlined"
          endIcon={<RestartAlt />}
          className={cx("btn")}
          onClick={ResetForm}
        >
          Xoá
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowDownward />}
          onClick={HandleSend}
          className={cx("btn")}
        >
          Gửi
        </Button>
      </span>
    </span>
  );
};

export const ModelQuestionFree = ({ send }) => {
  const [Value, SetValue] = useState("Phải cần bao nhiêu gam đồng để khử hoàn toàn lượng ion bạc có trong 85ml dung dịch AgNO3 0,15M");
  const handleChange = (e) => {SetValue(e.target.value);};
  const ResetForm = () => {SetValue("")};
  const HandleSend = () => {
      send(Value);
  };
  return (
    <span className={cx("text-field")}>
          <TextField
          id="outlined-multiline-static"
          label="Câu hỏi"
          multiline
          rows={4}
          value={Value}
          onChange={handleChange}
        />
      <span className={cx("submit-section")}>
        <Button
          variant="outlined"
          endIcon={<RestartAlt />}
          className={cx("btn")}
          onClick={ResetForm}
        >
          Xoá
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowDownward />}
          onClick={HandleSend}
          className={cx("btn")}
        >
          Gửi
        </Button>
      </span>
    </span>
  );
};

