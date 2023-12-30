import React ,{ useContext} from "react";
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { logoWithText } from "../../assets/svg";
import { AdminLogo } from "../../assets/png";
import SidebarItem from "../SidebarItem";
import { ArraySidebar, ArraySidebarAlt } from "./config";
import { Book } from "../../assets/png";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";
import { AuthContext } from "../../storage/auth-context";
let cx = classNames.bind(styles);
const Sidebar = ({lbl}) => {
   const data = useContext(AuthContext);
   const {user} = data;
   
   const Navigate = useNavigate();
  return (
    <div className={cx('wrapper-sidebar')}>
      <div className={cx('logo-sidebar')}>
        <img src={logoWithText} alt="logo" onClick={()=>{
          Navigate('/');
        }} />
      </div>
      <div className={cx('list-sidebar-item')}>
       {ArraySidebar.map((item)=><SidebarItem key={item.text} icon={item.icon} text={item.text} isChecked={lbl===item.lbl} nav={item.nav} />)}
      </div>
      <div className={cx('guide-sidebar')}>
           <img src={Book} className={cx('book')}/>
           <h3>Tutorial</h3>
           <p>Đọc hướng dẫn <mark onClick={()=>{Navigate("/guide")}}>tại đây</mark> để biết thêm về cách sử dụng website</p>
      </div>
      <div className={cx('user')}>
          <div className={cx('user-wrapper')}>
             <div className={cx('user')}>
             <Avatar onClick={()=>{
              Navigate('/user')
             }}>{user ? user.username[0].toUpperCase() : "N"}</Avatar>
             <div className={cx('info')}>
                {user  &&  <label className={cx('username')}>{user.email }</label> }
               {user  && <label className={cx('email')}>{user.username}</label>  }
             </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export const SidebarAlt = ({lbl}) => {
  const data = useContext(AuthContext);
  const {user} = data;
  
  const Navigate = useNavigate();
 return (
   <div className={cx('wrapper-sidebar')}>
     <div className={cx('logo-sidebar--admin')}>
       <img src={AdminLogo} alt="logo" onClick={()=>{
         Navigate('/manage');
       }} />
     </div>
     <div className={cx('list-sidebar-item')}>
      {ArraySidebarAlt.map((item)=><SidebarItem key={item.text} icon={item.icon} text={item.text} isChecked={lbl===item.lbl} nav={item.nav} />)}
     </div>
     
     <div className={cx('user')}>
         <div className={cx('user-wrapper')}>
            <div className={cx('user')}>
            <Avatar onClick={()=>{
             Navigate('/user')
            }}>{user ? user.username[0].toUpperCase() : "N"}</Avatar>
            <div className={cx('info')}>
               {user  &&  <label className={cx('username')}>{user.email }</label> }
              {user  && <label className={cx('email')}>{user.username}</label>  }
            </div>
            </div>
         </div>
     </div>
   </div>
 );
};


export default Sidebar;
