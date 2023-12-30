import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

const CustomDialog = ({ open, handleDialogClose ,variant , Logout }) => {
 if(variant=="update"){
  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"User Update"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Profile của bạn được cập nhập thành công
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
 }else{
    return (
        <Dialog
          open={open}
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Đăng xuất"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             Bạn có chắc là muốn đăng xuất
            </DialogContentText>
          </DialogContent>
          <DialogActions >
            <Button onClick={handleDialogClose} >
                Huỷ
            </Button>
            <Button onClick={Logout}>
               Tiếp tục
            </Button>
          </DialogActions>
        </Dialog>
      );


 }
};

export default CustomDialog;