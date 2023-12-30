import React from "react";
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
const Element = ({number,index,symbol,name,mass,className,children,handleBubbleElement,handleDrag,handleDragOver,handleDialogOpen,decor,category}) => {
  
  return (
    <div draggable={true} className={cx("element-box",decor===category&&decor,className)} onClick={()=>{handleBubbleElement(index)}} onDragStart={(e)=>{
       handleDrag(e,symbol);
      
    }} onDragLeave={(e)=>{
      handleDragOver(e,symbol)

      
    }}
    onDragEnd={(e)=>{
          handleDialogOpen();
    }}
    >
      <div className={cx("mol-section")}>{number && number}</div>
      <div className={cx("label-section")}>{symbol && symbol}</div>
      <div className={cx("detail-section")}>
        <p>{name && name}</p>
        {children && children}
        <p>{mass && mass}</p>
      </div>
    </div>
  );
};

export default Element;
