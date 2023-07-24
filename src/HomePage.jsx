import React from "react";
import Extra from "./Extra";
import certs from "./assets/credentials.jpg";
import face from "./assets/front1.jpeg";
import facePhoto from "./assets/facePhoto.jpeg";

function HomePage() {
  return (
    <div>
      <div className="heros">
        <div className=" row ">
          <div className=" col text-overlay">
            <h1>
              <span>BURA </span>
              <span>SPRINGS </span>
              <span>FAMILY </span>
              <span>MEDICAL </span>
              <span>CENTRE </span>
              <span>LTD</span>
            </h1>
            <h4>
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
                </div>
                <div class="carousel-item">
                  <img src={face} className="hospital-image" />
                </div>
                <div class="carousel-item">
                  <img src={certs} className="hospital-image" />
                  <div class="carousel-caption d-none d-md-block">
                    <p>Facility operation approval certificates</p>
                  </div>
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
