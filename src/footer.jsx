import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logolocation from "./assets/logo-location.jpg";

function Footer() {
  return (
    <div className="shero">
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
              <li>Home</li>
            </Link>
            <Link to="/VisionMission" title="VissionMission">
              <li>Vision, Mission & Core Values</li>
            </Link>
            <Link to="/Histori" title="About">
              <li>History</li>
            </Link>
            <Link to="/Services" title="Services">
              <li>Services</li>
            </Link>
            <Link to="/Rescue" title="Rescue">
              <li>Rescue</li>
            </Link>
            <Link to="/Hazard" title="Hazard">
              <li>Hazardous Waste Management</li>
            </Link>
            <Link to="Contacts" title="Contacts">
              <li>Contacts</li>
            </Link>
          </ul>
        </div>
        <div className="col text-start ">
          <ul className="footer">
            <h5>
              <strong>Services</strong>
            </h5>
            <Link to="/Services#pharmacy">
              <li>Pharmacy</li>
            </Link>
            <Link to="/Services#laboratory">
              <li>Laboratory</li>
            </Link>
            <Link to="/Services">
              <li>Inpatient</li>
            </Link>
            <Link to="/Services">
              <li>Outpatient</li>
            </Link>
            <Link to="/Services">
              <li>Accident & Emergency</li>
            </Link>
            <Link to="/Services">
              <li>Maternity</li>
            </Link>
            <Link to="/Services">
              <li>MCH</li>
            </Link>
            <Link to="/Services">
              <li>Dental Clinic</li>
            </Link>
            <Link to="/Services">
              <li>Family Planning</li>
            </Link>
            <Link to="/Services">
              <li>Physiotherapy</li>
            </Link>
            <Link to="/Services">
              <li>Health Education</li>
            </Link>
            <Link to="/Services">
              <li>Homebased Care</li>
            </Link>
            <Link to="/Services">
              <li>Surgical Outpatient</li>
            </Link>
            <Link to="/Services">
              <li>Diabetes Clinic</li>
            </Link>
            <Link to="/Services">
              <li>Counselling</li>
            </Link>
          </ul>
        </div>
        <div className="col text-start">
          <ul className="footer">
            <h5>
              <strong>Work Hours</strong>
            </h5>
            <li>Monday: 7:00am - 7:00pm</li>
            <li>Tuesday: 7:00am - 7:00pm</li>
            <li>Wednesday: 7:00am - 7:00pm</li>
            <li>Thursday: 7:00am - 7:00pm</li>
            <li>Friday: 7:00am - 7:00pm</li>
            <li>Saturday: 7:00am - 7:00pm</li>
            <li>Sunday: 7:00am - 7:00pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;