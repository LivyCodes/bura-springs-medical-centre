import React from "react";
import Extra from "./Extra";
import certs from "./assets/credentials.jpg";
import facePhoto from "./assets/facePhoto.jpeg";
import staff from "./assets/staff.jpeg";
import heartrate from "./assets/heartrate.jpg";
import stethoscope from "./assets/stethoscope.jpg";
import doctor from "./assets/doctor.jpg";

function HomePage() {
  return (
    <div>
      <div className="heros">
        <div className=" row ">
          <div className=" col text-overlay">
            <h1 className="head">
              <span>BURA </span>
              <span>SPRINGS </span>
              <span>FAMILY </span>
              <span>MEDICAL </span>
              <span>CENTRE </span>
              <span>LTD</span>
            </h1>
            <h4 className="best-of">
              <span>Best of Care,</span>
              <span>Close to Home</span>
            </h4>
          </div>
          <div className="col">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide hospital-image"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={facePhoto} className="hospital-image" />
                  <p>Bura Springs Medical Centre Ltd</p>
                </div>
                <div class="carousel-item">
                  <img src={heartrate} className="hospital-image" />
                  <p>Patient in consultation</p>
                </div>
                <div class="carousel-item">
                  <img src={stethoscope} className="hospital-image" />
                  <p>A Stethoscope</p>
                </div>
                <div class="carousel-item">
                  <img src={doctor} className="hospital-image" />
                  <p>An attending</p>
                </div>
                <div class="carousel-item">
                  <img src={staff} className="hospital-image" />
                  <p>Hospital Staff</p>
                </div>
                <div class="carousel-item">
                  <img src={certs} className="hospital-image" />
                  <p>Facility operation approval certificates</p>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Extra />
    </div>
  );
}

export default HomePage;
