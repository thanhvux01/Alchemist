import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Element from "./Element";
import Bubble from "./Bubble";
import axios from "axios";
import Annotation from "./Annotation";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from "@mui/material";
import Sort from "./Sort";
let config = {
    baseURL : "http://localhost:5000/api",
    withCredentials: true
}
let cx = classNames.bind(styles);
const PeriodicTable = () => {
  const [displayBubble, setDisplayBubble] = useState(null);
  const [elements, setElements] = useState();
  const [elementA,setElementA] = useState();
  const [elementB,setElementB] = useState();
  const [open, setOpen] =  useState(false);
  const [combination,setCombination] = useState();
  const [category,Setcategory] = useState("");
  const handleBubble = () => {
    setDisplayBubble((prev) => {
      return !prev;
    });
  };
  const handleDialogOpen = async () => {
    try{
    const data = await axios.post('/combination/find',{elementA,elementB},config);
    setCombination(data['data']['data']);
    setOpen(true);
    console.log(combination);
    }catch(err){
      console.log(err);
    }
  };

  const handleDialogClose = () => {
    setOpen(false); 
  };
 const handleCategory = (e) => {
    Setcategory(e.target.value);
    
 }
 const handleBubbleElement = (index) => {
        setDisplayBubble(elements[index]);
 }
 const indexOfPerdioc = (arr) => {
       const restArr = arr.filter((item)=>{
        if(item.category!=='Lanthanide' && item.category!== 'Actinide'){
          return item;
        };  
       })
       const lathanideArr = arr.filter((item)=>item.category=='Lanthanide');
       const actinideArr = arr.filter((item)=>item.category=='Actinide');
       const indexedArray = [...restArr,...lathanideArr,...actinideArr];
       return indexedArray;
 }
  const GetListElement = async () => {
    try {
      const data = await axios.get(
        "http://localhost:5000/api/element/list-elements"
      );
      setElements(indexOfPerdioc(data["data"]["elements"]));
    } catch (err) {
      console.log(err);
    }
  };
  const handleDrag = (e,name) => {
      setElementA(name);

  }
  const handleDragOver = (e,name) => {
    setElementB(name);
  }

  useEffect(() => {
    GetListElement();
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("grid-table")}>
        {elements &&
          elements.map((item, i) => {
            return (
              <Element
                decor={category}
                key={item.name}
                index={i}
                name={item.name}
                mass={item.mass}
                number={item.number}
                symbol={item.symbol}
                handleBubbleElement={handleBubbleElement}
                handleDrag={handleDrag}
                handleDragOver={handleDragOver}
                handleDialogOpen={handleDialogOpen}
                category={item.category}
                
              />
            );
          })}
        <div className={cx("info")}>
          <Annotation />
        </div>
        <div className={cx("sort")}>
           <Sort handleCategory={handleCategory} category={category}/>
        </div>
        <div />
      </div>
      {displayBubble && (
        <Bubble element={displayBubble} handleBubble={handleBubble} />
      )}
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your Combination"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={cx('dialog-content')}>
               {combination && <img src={combination[0]['img']} />} 
               <Typography padding={5}> {combination && combination[0]['desc']} </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            Agree 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PeriodicTable;
