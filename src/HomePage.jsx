import React from "react";
import Extra from "./Extra";

function HomePage() {
  return (
    <div>
      <div className="background-image">
        <div className="text-overlay">
          <h1>
            <span>Welcome </span>
            <span>to </span>
            <span>Bura </span>
            <span>Springs </span>
            <span>Family </span>
            <span>Medical </span>
            <span>Centre </span>
            <span>Ltd</span>
          </h1>
          <h4>
            <span>Best of Care,</span>
            <span>Close to Home</span>
          </h4>
        </div>
      </div>
      <Extra />
    </div>
  );
}

export default HomePage;
