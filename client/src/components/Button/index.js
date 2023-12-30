import React from 'react';
import styles from './styles.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const config = {
    "btn":true,
    "small":false,
    "medium":false,
    "large":false,
}

const Button = ({size="medium",iColor="#FFFF",oColor="#132EE3",children,className,onClick}) => {
    // style={{width:160,height:60,backgroundColor:"#FFFF",borderColor:"#4e64ed"}} 
  if(size="medium"){
    config.medium=true;
    if(className){
        config[className] = true;
    }
    const btn = cx(config);
   
    return(
        <div className={btn} style={{width:160,height:60,backgroundColor:iColor,borderColor:oColor}} onClick={()=>{onClick()}}  >
            {children}
        </div>
    )
  }
}

export default Button