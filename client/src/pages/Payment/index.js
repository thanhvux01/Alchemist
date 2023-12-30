import React from 'react'
import styles from './styles.module.scss';
import { Paper } from '@mui/material';
import classNames from 'classnames/bind';
import Header from '../../components/Header';
import PaymentContent from '../../components/PaymentContent';
import PaymentState from '../../states/Pay';
let cx = classNames.bind(styles);

const Payment = () => {
  return (
    <PaymentState>
    <div className={cx('container')}>
        <Header type={'white'}/>
        <PaymentContent/>
    </div>
    </PaymentState>
  )
}

export default Payment