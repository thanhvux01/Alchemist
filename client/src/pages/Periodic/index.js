import React from "react";
import PeriodicTable from "../../components/PeriodicTable";
import styles from './styles.module.scss';
import Sidebar from "../../components/Sidebar";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Periodic = () => {
  
  return (
    <div className={cx('container')}>
        <Sidebar  lbl={'periodic'}/>
        <PeriodicTable/>
    </div>
  );
};

export default Periodic;
