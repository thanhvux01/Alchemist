import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { BannerIcon } from '../../assets/png';
let cx = classNames.bind(styles);

const Banner = ({img,color,title,description,className}) => {
  return (
    <div className={cx('container',color,className)}>
       <div className={cx('wrapper')}>
       <div className={cx('description')}>
         <label className={cx('title')}>
            {title}
        </label>
        <p className={cx('detail')}>
           {description}
        </p>
       </div>
        <div className={cx('icon')}>
            <img src={img} alt={'BannerIcon'}/>
        </div>
       </div>
    </div>
  )
}

export default Banner