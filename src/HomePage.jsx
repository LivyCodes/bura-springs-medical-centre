import React from "react";
import Extra from "./Extra";

function HomePage() {
  return (
    <div>
      <div className="heros">
        <div className=" row ">
          <div className=" col text-overlay">
            <h1>
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
          <div className="col">
            <img
              src="https://media.istockphoto.com/id/1301555107/photo/offering-patient-centred-care-that-proves-effective-and-efficient.jpg?s=612x612&w=0&k=20&c=ZQ-XMynZeFaYYLHfEhDpiBnjGd8DODsCb57r2ZmZkjw="
              className="hospital-image"
            />
          </div>
        </div>
      </div>

      <Extra />
    </div>
  );
}

export default HomePage;
