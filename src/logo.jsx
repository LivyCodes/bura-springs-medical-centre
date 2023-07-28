import React from "react";
import "./logo.css";
import logo from "./assets/logo.jpg";
import lindamama from "./assets/lindamama.png";
import eduafya from "./assets/eduafya.png";
import nhif from "./assets/Nhif.png";

function Logo() {
  return (
    <div className="heros ">
      <img src={logo} alt="logo" height={337.984} width={337.984} />
      <div className="my-3 text-center d-flex flex-column align-items-center">
        <h1>BURA SPRINGS FAMILY MEDICAL CENTRE LTD</h1>
        <h4 className="best-of">
          <span>Best of Care,</span>
          <span>Close to Home</span>
        </h4>
        <div className="d-flex justify-content-end logos mt-3">
          {" "}
          <img
            className="lindamama"
            src={lindamama}
            alt="logo"
            height={130}
            width={130}
          />
          <img
            className="nhif"
            src={nhif}
            alt="logo"
            height={130}
            width={130}
          />
          <img
            className="eduafya"
            src={eduafya}
            alt="logo"
            height={130}
            width={130}
          />
        </div>
        <div>
          <p className="cont text-center mt-1">0708 581 792 / 0729 582 278</p>
        </div>
      </div>
    </div>
  );
}

export default Logo;
