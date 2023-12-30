import React, { useEffect, useState , useRef } from "react";
import Sidebar from "../../components/Sidebar";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { useNavigate, useParams } from "react-router";
import { ModelQuestion2 , ModelQuestion, ModelQuestionFree} from "../../components/QA/ModelQuestion";
import Sample from "../../components/QA/SampleItem";
import axios from 'axios';
import { faVialVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { configAxios } from "../../config";
import { Avatar, CircularProgress } from "@mui/material";
import { configSample } from "./configSample";
import Message from "../../components/QA/Message";
let cx = classNames.bind(styles);

const QA = () => {
  const Navigate = useNavigate();
  const ChatRef = useRef(null);
  const { id } = useParams();
  const [Error,SetError] = useState(false);
  const [Wait,SetWait] = useState(false);
  const [Chat,SetChat] = useState([]);
  const [Type,SetType] = useState("ZN");
  const ConvertAnswer = (str) => {
            return str.replace(/\n/g, "<br />");
  }
  const handleTypeQuestion = (str) => {
        SetType(str);
        Navigate(`/qa/${str}`)
  }
  const SendQuestion = async (s,n) => {
      try {
      SetWait((prev)=>!prev)
      const data = await axios.post(`/chat/question/${id}`,{s,n},configAxios);
      Error && SetError((prev)=>!prev)
      SetChat((prev)=>{
          return [...prev,{question:`Cho tổng số hạt 2Z + N = ${s} trong đó N = ${n} vậy Z bằng bao nhiêu , dựa vào Z tìm nguyên tố trong bàng tuần hoàn"`,answer:ConvertAnswer(data.data)}]
      })
      SetWait((prev)=>!prev)
      } catch (err) {
        SetWait((prev)=>!prev)
        SetError((prev)=>!prev);
        console.log(err);
      }
   }
   const SendQuestion2 = async (element) => {
    try {
      console.log(element);
      Error && SetError((prev)=>!prev)
      SetWait((prev)=>!prev)
      const data = await axios.post(`/chat/question/${id}`,{element},configAxios);
      SetChat((prev)=>{
          return [...prev,{question:`Tìm cấu hình electron của nguyên tố ${element}"`,answer:ConvertAnswer(data.data)}]
      })
      SetWait((prev)=>!prev)
      } catch (err) {
        SetWait((prev)=>!prev)
        SetError((prev)=>!prev);
         console.log(err);
      }
     
   }
   const SendQuestionFree = async (str) => {
    try {
      console.log(str);
      Error && SetError((prev)=>!prev)
      SetWait((prev)=>!prev)
      const data = await axios.post(`/chat/question/uncategory`,{text:str},configAxios);
      SetChat((prev)=>{
          return [...prev,{question:`${str}`,answer:ConvertAnswer(data.data)}]
      })
      SetWait((prev)=>!prev)
      } catch (err) {
        SetWait((prev)=>!prev)
        SetError((prev)=>!prev);
         console.log(err);
      }
     
   }
   const GetChats = async () => {
         try {
          const data = await axios.get(`/chat/user-chat`,configAxios);
          SetChat(data.data);
        
         } catch (error) {
          console.log(error);
         }
   }
   const ScrollToBottom = () => {
      
       if(ChatRef.current) {
            ChatRef.current.scrollTop = ChatRef.current.scrollHeight
     
       }
   }
 useEffect(()=>{
    if(!id || id=='0') Navigate('/qa/1')
    GetChats();
    
 },[]);
 useEffect(()=>{
   ScrollToBottom();
 })

  return (
   
    <div className={cx("container")}>
      <Sidebar lbl={"Q&A"} />
      <div className={cx("QA-content")}>
        <span className={cx("title")}>Chọn mẫu câu hỏi</span>
        <div className={cx("list-sample")}>
            {configSample.map((item,i)=>{
                 return <Sample type={item.type} icon={item.icon} title={item.title} desc={item.desc} handleQuestion={handleTypeQuestion} key={i}/>
            })}
        </div>
        <div className={cx("question-section")}>
           {Type=="ZN" && <ModelQuestion send={SendQuestion}/> }  
           {Type=="Electron" && <ModelQuestion2 send={SendQuestion2}/> }
           {Type=="Free" && <ModelQuestionFree send={SendQuestionFree}/> }
        </div>
        <div className={cx('answer-section')}>
             {/* <div className={cx('chat-field')}>
                 {!Wait && <div dangerouslySetInnerHTML={{ __html: Answer }} />}
                 // {!Wait && <MathComponent/>}
                 {Wait &&  <span className={cx('loading')}><CircularProgress className={cx('progress')}/></span>}
                 {Error && <span className={cx('error-section')}>
                <FontAwesomeIcon icon={faVialVirus} className={cx('error')}/>
                <span className={cx('lbl')}>Đã có lỗi xảy ra</span>
                </span>}
             </div> */}
              <div className={cx('chat-field')} ref={ChatRef}>
                 {Chat && Chat.map((item,i)=><Message question={item.question} answer={item.answer} key={i}/>)}
                {Wait && <span className={cx('loading')}><CircularProgress className={cx('progress')}/></span> }
                {Error && <span className={cx('error-section')}>
                <FontAwesomeIcon icon={faVialVirus} className={cx('error')}/>
                <span className={cx('lbl')}>Đã có lỗi xảy ra</span>
                </span>}
              </div>
            
        </div>
       
      </div>
    </div>
 
  );
};

export default QA;
