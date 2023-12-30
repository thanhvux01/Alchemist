import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);
const SidebarItem = ({icon,text,isChecked,nav}) => {
    const Navigate = useNavigate();
    return (
    <div className={cx('sidebar-item',isChecked && 'checked')} onClick={()=>{
        Navigate(`/${nav}`)
    }}>
        <FontAwesomeIcon icon={icon} className={cx('icon')} />
         <div className={cx('text')}>{text}</div>
    </div>
    )
}

export default SidebarItem