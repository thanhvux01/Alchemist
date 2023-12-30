// define your extension array
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules } from "./config";
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Quill = ({value,setValue}) => {
  
  return (
    <div className={cx('editor-wrapper')}>
       <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}/>
   </div>
  )
}

export default Quill