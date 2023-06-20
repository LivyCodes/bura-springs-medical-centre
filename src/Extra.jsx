import React from "react";
import "./Extra.css";

function Extra() {
  return (
    <div class="container text-start">
      <div class="row mt-3">
        <div class="col">
          <h4 class="title mt-3">About our clinic</h4>
          <p class="col-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Learn more
          </a>
        </div>
        <div class="col-4 ">
          <div class="card " id="work-hours">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <li class="list-group-item">
                  <h6 class="title mt-3">Working Hours</h6>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Weekdays: 7:00am to 7:00pm</li>
                    <li class="list-group-item">Saturday: 7:00am to 7:00pm</li>
                    <li class="list-group-item">Sunday: 7:00am to 7:00pm</li>
                  </ul>
                </li>
              </li>
              <li class="list-group-item">
                <li class="list-group-item">
                  <h6 class="title mt-3">Inpatient Visiting Hours</h6>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Lunch hour: 12 noon to 2pm</li>
                    <li class="list-group-item">Evening hour: 4pm to 7pm</li>
                  </ul>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h4 class="title mt-3 text-center">Our Specialized Clinics</h4>
      <div class="row mt-3">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Obstetrics & Gynaecology</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Physiotherapy</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Peadiatrics</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Pharmacy</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Physician(Internist)</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Physician-Dermatologist</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-5 mb-5">
        ⚠ Incase of a medical emergency, please call an ambulance or visit the
        nearest emergency room!
      </p>

      <div class="row mt-3 mb-3">
        <div class="col">
          <div class="card card-a text-center">
            <div class="card-body">
              <h5 class="card-title text-custom title mt-3">Work times</h5>

              <p class="card-text text-custom">
                The operation time for each clinic varies as well as the
                visiting hours Check out the schedule for more information
              </p>
              <a href="#" class=" btn-custom btn btn-primary">
                Check out our schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
