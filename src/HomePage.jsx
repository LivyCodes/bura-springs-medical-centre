import React from "react";
import Extra from "./Extra";
import certs from "./assets/credentials.jpg";
import facePhoto from "./assets/facePhoto.jpeg";
import staff from "./assets/staff.jpeg";
import heartrate from "./assets/heartrate.jpg";
import stethoscope from "./assets/stethoscope.jpg";
import doctor from "./assets/doctor.jpg";
import reception from "./assets/reception.jpeg";
import hospital from "./assets/hos.jpeg";
import washrooms from "./assets/washrooms.jpeg";
import meds from "./assets/meds.jpeg";
import tanks from "./assets/tanks.jpeg";
import ward from "./assets/ward.jpeg";
import physiotherapy from "./assets/physiotherapy.jpeg";
import pharmacy from "./assets/pharmacy.jpeg";
import maternity from "./assets/maternity-bed2.jpeg";
import triage from "./assets/triage.jpeg";

function HomePage() {
  return (
    <div>
      <div>
        <div className=" row ">
          <div className="col justify-content-center">
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
                  <img src={hospital} className="hospital-image" />
                </div>
                <div class="carousel-item">
                  <img src={reception} className="hospital-image" />
                  <p>Facility Reception</p>
                </div>

                <div class="carousel-item">
                  <img src={physiotherapy} className="hospital-image" />
                  <p>Physiotherapy Room</p>
                </div>
                <div class="carousel-item">
                  <img src={maternity} className="hospital-image" />
                  <p>Maternity Room</p>
                </div>
                <div class="carousel-item">
                  <img src={pharmacy} className="hospital-image" />
                  <p>Pharmacy</p>
                </div>
                <div class="carousel-item">
                  <img src={triage} className="hospital-image" />
                  <p>Triage</p>
                </div>
                <div class="carousel-item">
                  <img src={ward} className="hospital-image" />
                  <p>Ward</p>
                </div>
                <div class="carousel-item">
                  <img src={heartrate} className="hospital-image" />
                  <p>Patient in consultation</p>
                </div>
                <div class="carousel-item">
                  <img src={staff} className="hospital-image" />
                  <p>Hospital Staff</p>
                </div>
                <div class="carousel-item">
                  <img src={certs} className="hospital-image" />
                  <p>Facility operation approval certificates</p>
                </div>
                <div class="carousel-item">
                  <img src={meds} className="hospital-image" />
                </div>
                <div class="carousel-item">
                  <img src={tanks} className="hospital-image" />
                  <p>Water Tanks</p>
                </div>
                <div class="carousel-item">
                  <img src={washrooms} className="hospital-image" />
                  <p>Washrooms</p>
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
