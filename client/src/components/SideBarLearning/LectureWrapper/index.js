import React , {useState,useContext} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { KeyboardArrowDownRounded } from '@mui/icons-material';
import LessonItem from '../LessonItem';
import { LessonContext } from '../../../states';
let cx = classNames.bind(styles);

const LectureWrapper = ({lecture,index}) => {
  const data = useContext(LessonContext)
  const [List,SetList] = useState(false);
  const ShowList = () => {
     SetList((state)=>!state);
  }
  return (
    <div className={cx("lecture-wrapper")}>
    <div className={cx("header")}>
      <div className={cx("chapter-title")} onClick={()=>{ShowList()}}>
        <span className={cx("title")}>{`Chương ${index+1}: ${lecture.name}`}</span>
        <KeyboardArrowDownRounded className={cx("show")}  />
      </div>
      <div className={cx("bottom-info")}>
        <span className={cx("lessons")}>{`0/${lecture.lessons.length}`}</span>
        <span className={cx("time")}>3 phút</span>
      </div>
    </div>
    {List &&
      <div className={cx("list")}>
      {lecture.lessons.map((item,i)=><LessonItem content={item} index={i} key={i} />)}
     </div>
     }
  
  </div>
  )
}

export default LectureWrapper