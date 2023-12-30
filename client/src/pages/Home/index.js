import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import FirstSection from "../../components/Home/FirstSection";
let cx = classNames.bind(styles);
// const homeHeader = cx("home-header");
const Home = () => {
  return (
    <div className="homepage-box">
      <FirstSection/>
    </div>
  );
};

export default Home;
