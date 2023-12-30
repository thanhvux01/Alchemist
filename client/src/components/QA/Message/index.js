import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Bot } from '../../../assets/png';
import { Avatar } from '@mui/material';
let cx = classNames.bind(styles);
const Message = ({question,answer}) => {

  return (
    <span className={cx('message')}>
    <span className={cx('user')}>
      <Avatar>N</Avatar>
      <span>{question}</span>
    </span>
    <span className={cx('bot')}>
       <Avatar src={Bot} sx={{bgcolor:"#FFFF"}}></Avatar>
       <div dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, "<br />") } }></div>
    </span>
</span>
  )
}

export default Message