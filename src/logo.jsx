import React from "react";
import "./logo.css";
import logo from "./assets/logo.jpg";
import lindamama from "./assets/lindamama.jpg";
import eduafya from "./assets/eduafya.jpg";
import nhif from "./assets/Nhif.jpg";

function Logo() {
  return (
    <div className="heros">
      <img src={logo} alt="logo" height={120} width={120} />
      <img src={lindamama} alt="logo" height={120} width={120} />
      <img src={nhif} alt="logo" height={120} width={120} />
      <img src={eduafya} alt="logo" height={120} width={120} />
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
