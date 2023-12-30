import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import MultipleContent from "../MultipleChoice";
import { CardMedia } from "@mui/material";
let cx = classNames.bind(styles);

const View = ({ lesson }) => {
  if (lesson) {
     switch(lesson.category){
        case 'theory' :
          return (<div className={cx('view','theory')}> 
                  {lesson.data.doc && <span dangerouslySetInnerHTML={{__html:lesson.data.doc}}></span> }
           </div>)
          break;
          case 'quiz' :
            return (<div className={cx('view','quiz')}>        
             <MultipleContent data={lesson.data.questions}/>   
        </div>)
        break;
        case 'video':
          return (<div className={cx('view','video')}>        
            <CardMedia component='video' image={lesson.data.url} controls className={cx('player')}/>   
     </div>)
     }
      
    
  }
};

export default View;
