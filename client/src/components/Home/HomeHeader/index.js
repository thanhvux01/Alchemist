import React from 'react'
import SearchBar from '../../SearchBar'
import {logoWithText } from "../../../assets/svg";
import './styles.scss'
const HomeHeader = () => {
  return (
    <div className="home-header">
    <div className="home-logo">
      <img src={logoWithText} />
    </div>
    <div className="home-direction">
      <ul>
        <li>Trang chủ</li>
        <li>Công cụ</li>
        <li>Tin tức</li>
        <li>Liên hệ</li>
      </ul>
    </div>
   <SearchBar/>
   
  </div>
  )
}

export default HomeHeader