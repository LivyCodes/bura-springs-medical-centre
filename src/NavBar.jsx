import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo2.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="logo" height={100} width={100} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/" title="HomePage">
                  HOME
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/Products"
                  title="Our Products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT US
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      class="dropdown-item"
                      to="/VisionMission"
                      title="Vision, Mission & Core Values"
                    >
                      VISION, MISSION & CORE VALUES
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Histori" title="History">
                      OUR HISTORY & THE MANAGEMENT TEAM
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Services" title="Our Services">
                  SERVICES
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/Products"
                  title="Our Products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTS
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/Rescue" title="Rescue">
                      RESCUE
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item"
                      to="/Hazard"
                      title="Waste Management"
                    >
                      HAZARDOUS WASTE MANAGEMET
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Contacts" title="Our Contacts">
                  CONTACTS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
