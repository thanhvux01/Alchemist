import React, { useEffect , useRef , useContext } from "react";
import { useNavigate } from "react-router";
import "./styles.scss";
import Button from "../../Button";
import { glasses } from "../../../assets/svg";
import { AuthContext } from "../../../storage/auth-context";

const Intro = () => {
    const auth = useContext(AuthContext);
    const Navigate = useNavigate();
    const firstLineRef = useRef();
    const secondLineRef = useRef();
    let i = 0;
    const firstLine = ["Học hóa không khó ","Reactions are important","I lost an electron"];
    const secondLine = ["như bạn tưởng","Don’t overreact ","So I am very positive."];
    const MovingText = () =>{
       const interval = setInterval(()=>{
                   if(i<2){
                      i++;
                      firstLineRef.current.innerHTML = firstLine[i];
                      secondLineRef.current.innerHTML = secondLine[i];
                   }else if(i==2){
                     i=0;
                     firstLineRef.current.innerHTML = firstLine[i];
                     secondLineRef.current.innerHTML = secondLine[i];
                   }
            },3000)
            return interval;
    }
    useEffect(()=>{
       const interval = MovingText();
        return ()=>{
             clearInterval(interval);
        }
    })
  return (
    <div className="intro-wrapper">
      <div className="intro-text">
        <p ref={firstLineRef}>Học hóa không khó</p>
        <p ref={secondLineRef}>như bạn tưởng ?</p>
        <Button className="btn-config" onClick={()=>{
          {auth.user ? Navigate("/hub") : Navigate("/auth/login")}
        }}>Try</Button>
      </div>
      <div className="intro-img">
        <img src={glasses} />
      </div>
    </div>
  );
};

export default Intro;
