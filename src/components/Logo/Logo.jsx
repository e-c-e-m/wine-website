import React from "react";
import "./logo.css";
import Grapes from "../../assets/images/grapes.png";

const Logo = ({ showImg }) => {
  return (
    <div className="website-title-slogan-container">
      {showImg && <img className="logo-img" src={Grapes} alt="logo" />}
      <h1 className="website-title">Santo Winery</h1>
      <p className="website-slogan">Authentic Italian Wines. Since 1837.</p>
    </div>
  );
};

export default Logo;
