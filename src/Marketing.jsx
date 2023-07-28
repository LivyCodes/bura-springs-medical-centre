import React from "react";
import buraFlier from "./assets/buraflier.jpg";
import face1 from "./assets/face1.jpeg";

function Marketing() {
  return (
    <div>
      <h4 className="title">Marketing</h4>
      <div className="row">
        <div className="col">
          <img src={buraFlier} className="hospital-image" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={face1} className="hospital-image" />
        </div>
      </div>
    </div>
  );
}

export default Marketing;
