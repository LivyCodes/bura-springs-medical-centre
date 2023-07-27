import React from "react";
import "./logo.css";
import logo from "./assets/logo.jpg";

function Logo() {
  return (
    <div className="heros">
      <img src={logo} alt="logo" height={100} width={100} />
      <div className="justify-content-center text-center">
        <h1>BURA SPRINGS FAMILY MEDICAL CENTRE LTD</h1>
        <h4 className="best-of">
          <span>Best of Care,</span>
          <span>Close to Home</span>
        </h4>
      </div>
    </div>
  );
}

export default Logo;
