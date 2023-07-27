import React from "react";
import "./Services.css";
import pharmacy from "./assets/pharmacy.jpeg";
import pharmacy2 from "./assets/pharmacy2.jpeg";
import maternity from "./assets/maternity-bed.jpeg";
import maternityroom from "./assets/maternity-bed2.jpeg";
import mch from "./assets/mch.jpg";
import lab1 from "./assets/lab1.jpeg";
import lab2 from "./assets/lab2.jpeg";
import ae from "./assets/a&e1.jpeg";
import Triage from "./assets/triage.jpeg";
import ward from "./assets/ward.jpeg";
import consultation from "./assets/consultation.jpg";
import dental from "./assets/dental.jpg";
import familyPlanning from "./assets/fp.jpg";
import physiotherapy from "./assets/physiotherapy.jpeg";
import healthEducation from "./assets/healthEducation.jpg";
import homecare from "./assets/homecare.jpeg";
import diabetes from "./assets/diabetes.jpg";
import counselling from "./assets/counselling.jpg";
import consult from "./assets/consult.jpeg";

function Services() {
  return (
    <div>
      <div class="hero hero-1 d-flex">
        <h1>SERVICES</h1>
      </div>
      <div className="container">
        <div className="row mt-2" id="pharmacy">
          <h3>PHARMACY SERVICES</h3>
          <div className="col">
            <p className="services-p text-start">
              Bura Springs Family Medical Centre Pharmacy, staffed by qualified
              professionals, offers efficient services for both in-patients and
              out-patients. We ensure safe and fitting treatment, dispense
              quality medicines at competitive prices, and undergo vetting and
              approval processes by The Medicines and Therapeutic Committee. All
              medicines and supplies are procured from registered suppliers,
              ensuring quality and avoiding counterfeit products.
            </p>
          </div>
          <div className="col">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={pharmacy} className="col-images" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5></h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={pharmacy2} className="col-images" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5></h5>
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
        <div className="row mt-2" id="laboratory">
          <h3>LABORATORY SERVICES</h3>
          <div className="col">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={lab1} className="col-images" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Laboratory Room</h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={lab2} className="col-images" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Laboratory Room</h5>
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
          <div className="col">
            <p className="services-p ">
              Bura Springs Family Medical Centre Laboratory offers accurate and
              timely diagnostic testing to support healthcare needs. With
              advanced technology and skilled professionals, we engage with
              quality assessment bodies to monitor and evaluate results. We
              maintain WHO standards and uphold quality assurance programs,
              running daily internal quality controls and calibrations. We offer
              a comprehensive range of diagnostic tests, adhering to industry
              standards for accuracy and reliability.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>INPATIENT SERVICES</h3>
          <div className="col">
            <p className="services-p ">
              Bura Springs Family Medical Centre Inpatient Services prioritizes
              well-being and compassionate care during hospital stays. With a
              dedicated team, we offer personalized attention, round-the-clock
              monitoring, and advanced medical services. We create a warm,
              supportive environment, address concerns, and ensure safety and
              comfort through attentive nursing staff and strict infection
              control measures.
            </p>
          </div>
          <div className="col">
            <img src={ward} className="col-images" />
          </div>
        </div>
        <div className="row mt-2">
          <h3>OUTPATIENT SERVICES</h3>
          <div className="col">
            <img src={consultation} className="col-images" />
          </div>
          <div className="col">
            <p className="services-p ">
              Bura Springs Family Medical Centre offers comprehensive outpatient
              services for various medical conditions, including hypertension,
              diabetes, respiratory diseases, gastrointestinal disorders, and
              neurological problems. With experienced physicians, nurses, and
              support staff, we provide personalized care and state-of-the-art
              diagnostic facilities for optimal treatment. Book an appointment
              today.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>ACCIDENT & EMERGENCY</h3>
          <div className="col">
            <p className="services-p ">
              Our Accident & Emergency department that handles all the emergency
              cases which comes to the hospital and provides emergency medical
              services in Kenya. The emergency department is staffed by highly
              specialized emergency nurses and doctors whose role is to assess
              the patient, perform the required emergency investigations and
              provide the patient with the necessary immediate life-saving
              treatment before they get admitted for more definitive care.
            </p>
          </div>
          <div className="col">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={ae} className="col-images" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Wheelchair</h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={Triage} className="col-images" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Triage</h5>
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
        <div className="row mt-2">
          <h3>MATERNITY</h3>
          <div className="col">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={maternity} className="col-images" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Maternity Bed</h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={maternityroom} className="col-images" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Maternity Room</h5>
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
          <div className="col">
            <p className="services-p ">
              At Bura Springs Family Medical Centre, we acknowledge that
              pregnancy, labour, birth and early parenting are significant
              events in the life of every mother. Every birth is unique. We
              start the journey with you right from the moment you get the news
              of your pregnancy by focusing on Antenatal Health promotion,
              nutritional interventions, early detection of pregnancy related
              conditions. Our delivery options include midwife-assisted, and
              gynaecologist - assisted delivery.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>DENTAL CLINIC</h3>
          <div className="col">
            <p className="services-p ">
              At Bura Springs Family Medical Centre, we provide comprehensive
              dental care services for adults and children. Our experienced
              dentists and dental hygienists offer preventive care, restorative
              care, and cosmetic dental services. We offer services such as
              teeth cleaning, fillings, root canals, crowns, bridges, dentures,
              braces, teeth whitening, and more. Our dental care services are
              designed to keep your teeth healthy, functional, and beautiful.
              Contact us today to schedule your dental appointment and get the
              smile you've always wanted.
            </p>
          </div>
          <div className="col">
            <img src={dental} className="col-images" />
          </div>
        </div>
        <div className="row mt-2">
          <h3>MCH CLINIC</h3>
          <div className="col">
            <img src={mch} className="col-images" />
          </div>
          <div className="col">
            <p className="services-p ">
              Our Antenatal Clinic offers all-encompassing, comprehensive care
              to expectant women on all aspects of pregnancy and childbirth.
              Pre-Natal Exercises, health talks etc. effectively preparing the
              mother for childbirth and motherhood. At Our Post-Natal Clinic we
              attend to mothers returning for a post-delivery review.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>FAMILY PLANNING CLINIC</h3>
          <div className="col">
            <p className="services-p ">
              Bura Springs Family Medical Centre provides family planning
              services, including preconception counseling, birth control
              consultations, and screenings, empowering individuals and couples
              to make informed reproductive health choices. We prioritize open,
              non-judgmental conversations and provide personalized care, aiming
              to support patients throughout their journey.
            </p>
          </div>
          <div className="col">
            <img src={familyPlanning} className="col-images" />
          </div>
        </div>
        <div className="row mt-2">
          <h3>PHYSIOTHERAPY SERVICES</h3>
          <div className="col">
            <img src={physiotherapy} className="col-images" />
          </div>
          <div className="col">
            <p className="services-p ">
              At Bura Springs Family Medical Centre, we provide personalized
              physiotherapy sessions on case-by-case basis. We recognize that
              the need for rehabilitation is individual. Our Physiotherapy
              Department provides services for both our inpatient and outpatient
              clients. Each session includes close nursing care; and additional
              medical equipment depending on the case such as crutches, walkers,
              and any other type of equipment to ease your recovery. Other
              services include; Massage and Relaxation Techniques and Plaster
              Technology.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>HEALTH EDUCATION</h3>
          <div className="col">
            <p className="services-p ">
              Bura Springs Family Medical Centre offers comprehensive health
              education services to empower individuals to take control of their
              health and wellbeing. Our team of experienced healthcare
              professionals provides personalized sessions tailored to
              individual needs, empowering individuals to make informed
              decisions about their health and improve their quality of life.
              Contact us today to learn more about our health education services
              and start your journey towards a healthier, happier you.
            </p>
          </div>
          <div className="col">
            <img src={healthEducation} className="col-images" />
          </div>
        </div>
        <div className="row mt-2">
          <h3>HOMEBASED CARE CLINIC</h3>
          <div className="col">
            <img src={homecare} className="col-images" />
          </div>
          <div className="col">
            <p className="services-p ">
              Home-based care is a holistic approach to treating chronic or
              terminal illnesses, involving family participation and community
              involvement. It is a comprehensive approach that focuses on
              debilitating diseases that make patients unable to care for
              themselves. HBC is particularly important for patients with
              advanced AIDS illness, including those who are sick but still able
              to care for themselves and those who are bedridden.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>SURGICAL OUTPATIENT CLINIC</h3>
          <div className="col">
            <p className="services-p ">
              At Bura Springs Family Medical Centre, we prioritize precision,
              safety, and patient-centered care. Our experienced medical team
              utilizes the latest techniques and advancements to perform a wide
              range of surgical procedures, from routine to complex cases.
              Whether you require minimally invasive surgery or a major surgical
              intervention, you can trust our experts to provide the highest
              level of surgical excellence.
            </p>
          </div>
          <div className="col">
            <img src={consult} className="col-images" />
          </div>
        </div>
        <div className="row mt-2">
          <h3>DIABETES CLINIC</h3>
          <div className="col">
            <img src={diabetes} className="col-images" />
          </div>
          <div className="col">
            <p className="services-p ">
              Our Diabetes Care Clinic is dedicated to the prevention, treatment
              and management of Diabetes in all its forms. We ensure that all
              patients receive both basic and specialist diabetes care. The
              Centre develops innovative patient therapies that immeasurably
              improve the lives of people with diabetes in a one stop shop
              approach. At the core of the Centre lies its ambition to provide
              holistic and multidisciplinary care to patients and their
              families. Our aim is to promote self-management of patients while
              minimizing the risk of developing diabetes-related complications.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>COUNSELLING CLINIC</h3>
          <div className="col">
            <p className="services-p ">
              As part of our commitment to provide holistic health solutions to
              patients, we offer specialized Counselling and Psychotherapy
              services aimed at relieving any grieving or stressful problems
              aggravated by life situations, crises and diseases. The aim of
              this unit is to equip people who come to us with the ability to
              deal with very demanding situations and life realities in a
              friendly, yet professional and comfortable environment. The unit
              empowers patients to reconstruct, strengthen and get their lives
              on track while maintaining flourishing relationships in the
              family, in marriage and in communities.
            </p>
          </div>
          <div className="col">
            <img src={counselling} className="col-images" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
