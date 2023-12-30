import React from "react";
import { homepage_background } from "../../../assets/svg";
import HomeHeader from "../HomeHeader";
import Intro from "../Intro";
import "./styles.scss";

const FirstSection = () => {
  return (
    <div
      className="first-section"
      style={{ backgroundImage: `url(${homepage_background})` }}
    >
      <HomeHeader />
      <Intro/>
 
    </div>
  );
};

export default FirstSection;
