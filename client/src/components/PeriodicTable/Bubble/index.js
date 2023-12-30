import React, { useContext } from "react";
import { ElementContext } from "../../../storage/elements-context";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
let cx = classNames.bind(styles);

const Bubble = ({ element , handleBubble }) => {
  let arr1 = [];
  for(let i = 0 ; i < getElementNumber(10); i++){
     arr1.push("");
  }
  let arr2 = [];
  for(let i = 0 ; i < getElementNumber(10); i++){
    arr2.push("");
 }
 let arr3 = [];
 for(let i = 0 ; i < getElementNumber(10); i++){
   arr2.push("");
}
  if (element) {
    return (
      <div className={cx("container")}>
        <div className={cx("content")}>
          <div className={cx("orbit-container")}>
            <div className={cx("inner-orbit")}>
              {
                arr1.map((item)=>{
                   return <div className={cx('point')}></div>
                })
              }
              
            </div>
            <div className={cx("middle-orbit")}>
            {
                arr2.map((item)=>{
                   return <div className={cx('point')}></div>
                })
              }
            </div>
            <div className={cx("outer-orbit")}>
            {
                arr2.map((item)=>{
                   return <div className={cx('point')}></div>
                })
              }
            </div>
          </div>
          <TableContainer component={Paper} className={cx("table")}>
            <Table
              sx={{ minWidth: 400 }}
              size="small"
              aria-label="detail-table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Thông số chi tiết</TableCell>
                  <TableCell className={cx("toggle")} onClick={()=>{
                     handleBubble(null);
                  }}>X</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Name
                  </TableCell>
                  {element.name && (
                    <TableCell align="right">{element.name}</TableCell>
                  )}
                </TableRow>
                <TableRow
                  
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Symbol
                  </TableCell>
                  {element.symbol && (
                    <TableCell align="right">{element.symbol}</TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Number
                  </TableCell>
                  {element.number && (
                    <TableCell align="right">{element.number}</TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Mass
                  </TableCell>
                  {element.mass && (
                    <TableCell align="right">{element.mass}</TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Electron Configuration
                  </TableCell>
                  {element.electronConfiguration && (
                    <TableCell align="right">
                      {element.electronConfiguration}
                    </TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Electronegativity
                  </TableCell>
                  {element.electroneGativity && (
                    <TableCell align="right">
                      {element.electroneGativity}
                    </TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Oxidation States
                  </TableCell>
                  {element.oxidationStates && (
                    <TableCell align="right">
                      {element.oxidationStates.toString()}
                    </TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Standard State
                  </TableCell>
                  {element.standardState && (
                    <TableCell align="right">{element.standardState}</TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Melting Point
                  </TableCell>
                  {element.standardState && (
                    <TableCell align="right">{element.meltingPoint}</TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Boiling Point
                  </TableCell>
                  {element.boilingPoint && (
                    <TableCell align="right">{element.boilingPoint}</TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Density
                  </TableCell>
                  {element.density && (
                    <TableCell align="right">{element.density}</TableCell>
                  )}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Year Discovered
                  </TableCell>
                  {element.yearDiscovered && (
                    <TableCell align="right">
                      {element.yearDiscovered}
                    </TableCell>
                  )}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
};
function getElementNumber(max) {
  return Math.floor(Math.random() * max);
}
export default Bubble;
