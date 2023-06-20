import React from "react";
import "./VisionMission.css";

function VisionMission() {
  return (
    <div>
      <div class="hero hero-1 d-flex">
        <h1>VISION, MISSION & CORE VALUES</h1>
      </div>
      <div className="vision-mission">
        <h4 className="text-center title">Vision Statement</h4>
        <ol>
          <li>
            To provide a responsive healing environment for patients and their
            families and to improve the quality of life for all members of our
            community.
          </li>
          <li>
            To be a provider of high-quality patient-focused health care that is
            readily accessible, cost-effective and meets the needs of the
            communities we serve.
          </li>
          <li>
            To achieve an unequaled level of measurable quality and productivity
            in the delivery of health services that are responsive to the needs
            and values of patients, physicians, employers and employees.
          </li>
          <li>
            Improving the health and well-being of individuals, families and our
            community through innovation and pursuit of excellence
          </li>
          <li>
            To excel at providing for the healthcare needs of our region through
            quality, efficient and patient-centered care.
          </li>
        </ol>
        <h4 className="text-center title">Mission Statement</h4>
        <ol>
          <li>
            To provide a responsive healing environment for patients and their
            families, and to improve the quality of life for all members of our
            community.
          </li>
          <li>
            To be a provider of high-quality patient-focused health care that is
            readily accessible, cost effevtive and meets the needs of the
            communities we serve.
          </li>
          <li>
            To achieve an unequaled level of ,easurable quality and productivity
            in the delivery of health services that are responsive to the needs
            and values of patients, physicians, employers and employees.
          </li>
          <li>
            Improving the health and well-being of individuals, families and our
            community through innovation and pursuit of excellence
          </li>
          <li>
            To excel at providing for the healthcare needs of our region through
            quality, efficient and patient-centered care.
          </li>
        </ol>
      </div>

      <ol>
        <h4 className="text-center title">Core Values</h4>
        <div className="row row-custom mt-3">
          <div className="col-3">
            <div class="card custom-card">
              <div class="card-body">
                <li>
                  <h5 class="card-title"> Service Excellence</h5>
                  <p class="card-text">
                    We are committed to our standards of service excellence and
                    dedicated to exceeding the expectations of those we serve
                  </p>
                </li>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card custom-card">
              <div class="card-body">
                <li>
                  <h5 class="card-title">People</h5>
                  <p class="card-text">
                    We respect each person as a member of the hospital
                    community. Involvement and teamwork determine our future.
                  </p>
                </li>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card custom-card">
              <div class="card-body">
                <li>
                  <h5 class="card-title">Teamwork</h5>
                  <p class="card-text">
                    We foster an atmosphere of trust, collegiality,
                    collaboration, openness and cooperation.
                  </p>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-custom mt-3">
          <div className="col-3">
            <div class="card custom-card">
              <div class="card-body">
                <li>
                  <h5 class="card-title">Community Relationships</h5>
                  <p class="card-text">
                    We acknowledge our vital and dynamic role in our
                    communities. We will foster growth and development in a
                    manner that understands and serves their needs.
                  </p>
                </li>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card custom-card">
              <div class="card-body">
                <li>
                  <h5 class="card-title">Quality</h5>
                  <p class="card-text">
                    We consistently strive to provide the highest quality, safe
                    patient care.
                  </p>
                </li>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card custom-card">
              <div class="card-body">
                <li>
                  <h5 class="card-title ">Integrity</h5>
                  <p class="card-text">
                    Honesty, fairness and self-scrutiny in everything we do, as
                    the ideal means to protect overall safety, as well as assure
                    confidentiality and privacy.
                  </p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </ol>
    </div>
  );
}

export default VisionMission;
