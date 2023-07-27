import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logolocation from "./assets/buralogo.jpg";

function Footer() {
  return (
    <div className="shero mt-3">
      <div className="row">
        <div className="col text-start ">
          <img src={logolocation} className="col-images" />
        </div>
        <div className="col text-start ">
          <ul className="footer">
            <h5>
              <strong>Quick Links</strong>
            </h5>
            <Link to="/" title="Home">
              <li className="list-item">Home</li>
            </Link>
            <Link to="/VisionMission" title="VissionMission">
              <li className="list-item">Vision, Mission & Core Values</li>
            </Link>
            <Link to="/Histori" title="About">
              <li className="list-item">History</li>
            </Link>
            <Link to="/Services" title="Services">
              <li className="list-item">Services</li>
            </Link>
            <Link to="/Rescue" title="Rescue">
              <li className="list-item">Rescue</li>
            </Link>
            <Link to="/Hazard" title="Hazard">
              <li className="list-item">Hazardous Waste Management</li>
            </Link>
            <Link to="Contacts" title="Contacts">
              <li className="list-item">Contacts</li>
            </Link>
          </ul>
        </div>
        <div className="col text-start ">
          <ul className="footer">
            <h5>
              <strong>Services</strong>
            </h5>
            <Link to="/Services#pharmacy">
              <li className="list-item">Pharmacy</li>
            </Link>
            <Link to="/Services#laboratory">
              <li className="list-item">Laboratory</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Inpatient</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Outpatient</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Accident & Emergency</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Maternity</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">MCH</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Dental Clinic</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Family Planning</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Physiotherapy</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Health Education</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Homebased Care</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Surgical Outpatient</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Diabetes Clinic</li>
            </Link>
            <Link to="/Services">
              <li className="list-item">Counselling</li>
            </Link>
          </ul>
        </div>
        <div className="col text-start">
          <ul className="footer">
            <h5>
              <strong>Work Hours</strong>
            </h5>
            <li className="list-item">Mon: 7:00am - 7:00pm</li>
            <li className="list-item">Tue: 7:00am - 7:00pm</li>
            <li className="list-item">Wed: 7:00am - 7:00pm</li>
            <li className="list-item">Thur: 7:00am - 7:00pm</li>
            <li className="list-item">Fri: 7:00am - 7:00pm</li>
            <li className="list-item">Sat: 7:00am - 7:00pm</li>
            <li className="list-item">Sun: 7:00am - 7:00pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
