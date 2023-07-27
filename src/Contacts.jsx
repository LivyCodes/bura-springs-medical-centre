import React from "react";
import "./Contacts.css";
import DirectionsMap from "./assets/direction-map.jpg";

function Contacts() {
  return (
    <div>
      <div class="hero hero-1 d-flex">
        <h1>CONTACTS & DIRECTION</h1>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col contacts-col">
          <h4 className="contacts-head text-center">
            BUSINESS ADDRESS AND DETAILS
          </h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="custom-span">Company Name: </span> Bura Springs
              Family Medical Centre Ltd
            </li>
            <li className="list-group-item">
              <span className="custom-span">Form of Business: </span> Private
              Facility
            </li>
            <li className="list-group-item">
              <span className="custom-span">Registration No.: </span>
              PVT-PJUJ9BM
            </li>
            <li className="list-group-item">
              <span className="custom-span">Company Pin No.: </span>P051909252U
            </li>
            <li className="list-group-item">
              <span className="custom-span">MFL Code No.: </span>27539
            </li>
            <li className="list-group-item">
              <span className="custom-span">KMPDU No.: </span>018067
            </li>
            <li className="list-group-item">
              <span className="custom-span">Facility Level: </span>3A
            </li>
          </ul>
        </div>
        <div className="col contacts-col">
          <h4 className="contacts-head text-center">CONTACT INFORMATION</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="custom-span">Business Address: </span>Bura
              Mission/Sanga, Taita Taveta County. Plot No. 066. <br /> P.O.Box
              29749-00100, Nairobi, Kenya.
            </li>
            <li className="list-group-item">
              <span className="custom-span">E-mail Address: </span>
              <a href="mailto:buraspringshospital@gmail.com">
                buraspringshospital@gmail.com
              </a>
            </li>
            <li className="list-group-item">
              <span className="custom-span">Mobile/Telephone No.: </span>
              <a href="tel:+254708581792">+254708581792 | +254729582278</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mb-3">
        <img src={DirectionsMap} alt="directional map" />
      </div>
    </div>
  );
}

export default Contacts;
