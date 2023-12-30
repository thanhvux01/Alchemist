import React from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import LearnContent from '../../components/LearnContent';
import MinigameContent from '../../components/MiniGame';
let cx = classNames.bind(styles);
const Minigame = () => {
  
  return (
    <div className={cx('hub-container')}>
       <Sidebar  lbl={'minigame'}/>   
        <MinigameContent/>
    </div>
  )
}

export default Minigame