import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Paper, TextField, Button } from "@mui/material";

let cx = classNames.bind(styles);

const UserInfo = ({ user, SendData  }) => {
  const [User, setUser] = useState(user);
  const handleNickname = async (e) => {
    setUser((prev) => {
      return { ...prev, nickname: e.target.value };
    });
  };
  const handleEmail = async (e) => {
    setUser((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const handleBirthday = async (e) => {
    setUser((prev) => {
      return { ...prev, birthday: e.target.value };
    });
  };
  const handleNumber = async (e) => {
    setUser((prev) => {
      return { ...prev, birthday: e.target.value };
    });
  };
  return (
    <div className={cx("container")}>
      <Paper className={cx("user-section")}>
        <TextField
          variant="standard"
          id="nickname"
          className={cx("input")}
          defaultValue={user.nickname ? user.nickname : ""}
          label="@nickname"
          onChange={handleNickname}
        ></TextField>
        <TextField
          variant="standard"
          id="email"
          className={cx("input")}
          defaultValue={user.email ? user.email : ""}
          label="@email"
          onChange={handleEmail}
        ></TextField>
        <TextField
          variant="standard"
          id="birthdate"
          className={cx("input")}
          type="date"
          InputLabelProps={{ shrink: true }}
          defaultValue={user.birthday ? user.birthday.slice(0, 10) : ""}
          label="@birthday"
          onChange={handleBirthday}
        ></TextField>
        <TextField
          variant="standard"
          id="number"
          className={cx("input")}
          type="number"
          defaultValue={user.number ? user.number : ""}
          label="number"
          onChange={handleNumber}
        ></TextField>
        <div></div>
        <div className={cx("interact")}>
          <Button
            onClick={() => {
              SendData(User);
            }}
          >
            Confirm
          </Button>
          <Button>Cancel</Button>
        </div>
      </Paper>
    </div>
  );
};

export default UserInfo;
