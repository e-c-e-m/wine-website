import React from "react";
import Logo from "../Logo/Logo";
import "./header.css";
import Parallax from "react-rellax";

const Header = () => {
  return (
    <div className="website-header">
      <Parallax speed={7}>
        <Logo showImg={false} />
      </Parallax>
    </div>
  );
};

export default Header;
