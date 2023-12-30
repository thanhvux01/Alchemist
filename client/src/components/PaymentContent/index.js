import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { CompleteSection } from './CompleteSection';
import { PaymentSection } from './PaymentSection';
let cx = classNames.bind(styles);


const PaymentContent = () => {
  return (
    <div className={cx('container')}>
      <PaymentSection/>
      <CompleteSection/>
    </div>
  )
}

export default PaymentContent



