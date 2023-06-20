import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div class="hero hero-1 d-flex">
        <h1>ABOUT</h1>
      </div>
      <h4 className="text-center title">Vision Statement</h4>
      <ul>
        <li>
          To provide a responsive healing environment for patients and their
          families and to improve the quality of life for all members of our
          community.
        </li>
      </ul>

      <div className="row mt-3">
        <h4 className="text-center title">Company History</h4>
        <div className="col-5 about-col">
          <p>
            Bura Springs Family Medical Centre is a local company in Kenya,
            registered under the Kenyan Companies Act in December 2020. It
            offers a variety of healthcare services and has been operating for
            over 2 years. It is known for its ability to adapt to changing
            demands and create added value and synergies. It is equipped with
            modern facilities that enhance the experience for both service
            providers and patients.
          </p>
        </div>
        <div className="col-5">Photo Here</div>
      </div>
      <div className="row mt-3">
        <h4 className="text-center title">Management Team</h4>

        <div className="col-5">Photo Here</div>
        <div className="col-5 about-col">
          <p>
            Bura Springs Family Medical Centre is a local company in Kenya,
            registered under the Kenyan Companies Act in December 2020. It
            offers a variety of healthcare services and has been operating for
            over 2 years. It is known for its ability to adapt to changing
            demands and create added value and synergies. It is equipped with
            modern facilities that enhance the experience for both service
            providers and patients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
