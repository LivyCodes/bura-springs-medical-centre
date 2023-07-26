import React from "react";
import { Link } from "react-router-dom";
import "./Extra.css";

function Extra() {
  return (
    <div class="container text-start">
      <div class="row mt-3">
        <div class="col">
          <h4 class="title mt-3">About our clinic</h4>
          <p class="col-text">
            Bura Springs Family Medical Centre Ltd has the vision of providing
            establishments set on the principle of competence, commitment,
            compassion, convenience and effectiveness. We, through our outreach,
            aim at redifining the meaning of healthcare and its dimensions. We
            believe in being the true 'Partners in Health' for the community,
            ensuring that along with guidance, attention and care, expertise is
            delivered with cutting edge technology and precision.
            <br />
            Here, you can access the medical services for consultation,
            pharmacy, laboratory and physiotherapy. We work in corporation with
            other medical expertise inside and outside the country to ensure
            other specialized treatement are being handled properly through
            referrals and follow ups. <br />
            For us, our accomplishments and happy moments shall encompass from
            saving lives and making every patient who walks in the facility
            healthy and fit.
          </p>
          <a>
            <Link to="/Histori" class=" btn-custom btn btn-primary">
              Learn more
            </Link>
          </a>
        </div>
        <div class="col-4 " style={{ backgroundColor: "#fafcfc" }}>
          <div class="card " id="work-hours">
            <ul class="list-group list-group-flush" id="work-times">
              <li class="list-group-item">
                <li class="list-group-item">
                  <h5 class="title mt-3">Working Hours</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Weekdays: 7:00am to 7:00pm</li>
                    <li class="list-group-item">Saturday: 7:00am to 7:00pm</li>
                    <li class="list-group-item">Sunday: 7:00am to 7:00pm</li>
                  </ul>
                </li>
              </li>
              <li class="list-group-item">
                <li class="list-group-item">
                  <h5 class="title mt-3">Inpatient Visiting Hours</h5>
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

      <h4 class="title mt-3 text-center">Services Offered</h4>
      <div class="row mt-3">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">OutPatient Services</h5>

              <p class="card-text">
                We offer complete outpatient treatments for a variety of medical
                issues. Our team of skilled doctors, nurses, and support
                personnel are here to help you whether you need a normal
                check-up or a specialty appointment.
              </p>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Outpatient services include:
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        Diagnosis, treatment and management for conditions such
                        as:
                        <li>Hypertension</li>
                        <li>Diabetes</li>
                        <li>Respiratory Diseases</li>
                        <li>Gastrointestinal Disorders</li>
                        <li>Neurological Problems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Physiotherapy</h5>

              <p class="card-text">
                We provide personalized physiotherapy sessions on a case-by-case
                basis. We recognize that the need for rehabilitation is
                individual. Our Physiotherapy Department provides services for
                both our inpatient and outpatient clients.
              </p>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Each session includes:
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Close Nursing Care</li>
                        <li>
                          Additional Medical Equipment eg
                          <ul>
                            <li>Crutches</li>
                            <li>Walkers</li>
                          </ul>
                        </li>
                        <li>Massage and Relaxation Techniques</li>
                        <li>Plaster Technology</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Health Education</h5>

              <p class="card-text">
                Health education is an essential component of promoting wellness
                and patient empowerment. We believe that knowledge is power when
                it comes to your health, which is why we offer comprehensive
                health education services.
              </p>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Topics covered include:
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Healthy lifestyle Promotion</li>
                        <li>Diseases Prevention</li>
                        <li>Medication Management</li>
                        <li>Chronic Disease Management</li>
                        <li>Nutrition Education</li>
                        <li>Mental Health Awareness</li>
                        <li>Sexual Health Education</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Dental Clinic</h5>
              <p class="card-text">
                Our experienced dentists and dental hygienists offer
                comprehensive dental care services for adults and children,
                including preventive care, restorative care and cosmetic dental
                services, ensuring your teeth and gums are healthy, functional
                and beautiful .
              </p>

              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      We offer services such as:
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Teeth Cleaning</li>
                        <li>Fillings</li>
                        <li>Root Canals</li>
                        <li>Crowns</li>
                        <li>Bridges</li>
                        <li>Dentures</li>
                        <li>Braces</li>
                        <li>Teeth Whitening</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Laboratory Services</h5>

              <p class="card-text">
                Our facility offers accurate, timely diagnostic testing for
                healthcare needs, equipped with advanced technology and skilled
                lab professionals. We adhere to industry standards and strict
                quality control measures.
              </p>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Diagnostic tests offered include:
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Blood Work</li>
                        <li>Urine Analysis</li>
                        <li>Microbiology</li>
                        <li>Pathology</li>
                        <li>Imaging Studies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title title mt-3">Inpatient Services</h5>

              <p class="card-text">
                We prioritize your well-being and deliver compassionate care
                throughout your hospital stay. Our dedicated team of healthcare
                professionals provides personalized attention and advanced
                medical services tailored to your specific needs.
              </p>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Inpatient Services include:
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Short-term Observation</li>
                        <li>Infusion Therapy</li>
                        <li>Postoperative Recovery</li>
                        <li>Pain Management</li>
                        <li>Acute Medical Management</li>
                        <li>Specialized Treatment Units</li>
                        <li>Observation & Management of Acute Illness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a>
          <Link to="/Services" class=" btn-custom btn btn-primary mt-3">
            Explore our comprehensive range of services for detailed information
          </Link>
        </a>
      </div>

      <p class="mt-5 mb-5 text-center">
        ⚠ Incase of a medical emergency, please call an ambulance or visit the
        nearest emergency room!
      </p>

      <div class="row mt-3 mb-3">
        <div class="col">
          <div class="card card-a text-center">
            <div class="card-body">
              <h5 class="card-title text-custom  mt-3">Work times</h5>

              <p class="card-text text-custom">
                The operation time for each clinic varies as well as the
                visiting hours Check out the schedule for more information
              </p>
              <a href="#work-times" class=" btn-custom btn btn-primary">
                Check out our schedule
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col mt-3">
          <h4 className="title">OUR SOCIAL IMPACT</h4>
          <p>
            The idea of CSR has placed corporations not only in the position to
            be responsible for economic and legal obligations but also to a
            responsibility to society which extends beyond these obligations. In
            achieving our noble obligation and our vision of offering social
            setvices, we came up with Bura Springs FC. This is a football club
            fully sponsored by Bura Springs Family Medical Centre.
          </p>
          <a href="#" class="btn btn-primary">
            How We Give Back
          </a>
        </div>
        <div className="col mt-3">
          <strong>BURA SPRINGS FC PHOTO</strong>
        </div>
      </div>
    </div>
  );
}

export default Extra;
