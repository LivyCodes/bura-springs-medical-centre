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

function Services() {
  return (
    <div>
      <div class="hero hero-1 d-flex">
        <h1>SERVICES</h1>
      </div>
      <div className="container">
        <div className="row mt-2">
          <h3>PHARMACY SERVICES</h3>
          <div className="col">
            <p className="services-p text-start">
              Bura Springs Family Medical Centre Pharmacy, is staffed by highly
              qualified professionals with specialized qualifications, takes
              pride in the quality of professional services offered to
              customers. The pharmacy is committed to providing efficient
              services to both in-patients and out-patients, while ensuring that
              treatment is safe and fitting. We dispense quality medicines at
              our facility at the best price possible. Before stocking,
              medicines go through a vetting and approval process conducted by
              The Medicines and Therapeutic Committee, a body that plays vital
              governance, policy and support role for medicine use processes
              within the facility. All medicines and medical supplies are
              procured by the hospital from registered suppliers thereby always
              guaranteeing our patients quality medicines, considering the risk
              of counterfeit and substandard products in the industry.
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
        <div className="row mt-2">
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
            <p className="services-p text-start">
              Bura Springs Family Medical Centre Laboratory is dedicated to
              providing accurate and timely diagnostic testing to support your
              healthcare needs. Our state-of-the-art facility is equipped with
              advanced technology and staffed by highly skilled laboratory
              professionals committed to delivering reliable results. In the
              quest for access to quality services for all our clients, we
              ensure to engage with quality assessment bodies to monitor and
              evaluate some of our results. Through a quality coordinator, we
              ensure to maintain the WHO standard and uphold all quality
              Assurance programs. Before any testing starts, daily internal
              quality controls and calibrations are run to assure quality of the
              reports. We offer a comprehensive range of diagnostic tests,
              including blood work, urine analysis, microbiology, pathology, and
              imaging studies. Our experienced team follows strict quality
              control measures and adheres to industry standards to ensure the
              accuracy and reliability of every test performed.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>INPATIENT SERVICES</h3>
          <div className="col">
            <p className="services-p text-start">
              Welcome to Bura Springs Family Medical Centre Inpatient Services,
              where we prioritize your well-being and deliver compassionate care
              throughout your hospital stay. Our dedicated team of healthcare
              professionals provides personalized attention, round-the-clock
              monitoring, and advanced medical services tailored to your
              specific needs. We strive to create a warm and supportive
              environment, addressing your concerns and keeping you informed
              every step of the way. With a focus on your recovery, our
              attentive nursing staff, supportive services, and strict infection
              control measures ensure your safety and comfort. Trust Bura
              Springs Family Medical Centre Inpatient Services for comprehensive
              care that promotes healing and enhances your overall well-being.
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
            <p className="services-p text-start">
              At Bura Springs Family Medical Centre, we provide comprehensive
              outpatient services for a wide range of medical conditions.
              Whether you need a routine check-up or a specialist consultation,
              our team of experienced physicians, nurses and support staff are
              here to assist you. We offer diagnosis, treatment and management
              for conditions such as hypertension, diabetes, respiratory
              diseases, gastrointestinal disorders, neurological problems, and
              many more. Our state-of-the-art diagnostic facilities and
              personalized care ensure that you receive the best possible
              treatment. Book an appointment with us today and experience the
              best outpatient care.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>ACCIDENT & EMERGENCY</h3>
          <div className="col">
            <p className="services-p text-start">
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
            <p className="services-p text-start">
              At Bura Springs Family Medical Centre, we acknowledge that
              pregnancy, labour, birth and early parenting are significant
              events in the life of every mother. Every birth is unique. We
              start the journey with you right from the moment you get the news
              of your pregnancy by focusing on Antenatal Health promotion,
              nutritional interventions, early detection of pregnancy related
              conditions. Our delivery options include midwife-assisted, and
              gynaecologist – assisted delivery.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>DENTAL CLINIC</h3>
          <div className="col">
            <p className="services-p text-start">
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
            <p className="services-p text-start">
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
            <p className="services-p text-start">
              At Bura Springs Family Medical Centre, we offer comprehensive
              family planning services to empower individuals and couples in
              making informed choices about their reproductive health. Our
              services include preconception counseling, birth control
              consultations, and reproductive health screenings. We prioritize
              open and non-judgmental conversations, ensuring confidential and
              personalized care to align with each patient's unique
              circumstances and aspirations. Our goal is to support you at every
              stage of your family planning journey and help you achieve your
              reproductive health goals with compassion and expertise.
            </p>
          </div>
          <div className="col">
            <img src={pharmacy} className="col-images" />
          </div>
        </div>
        <div className="row mt-2">
          <h3>PHYSIOTHERAPY SERVICES</h3>
          <div className="col">
            <img src={pharmacy} className="col-images" />
          </div>
          <div className="col">
            <p className="services-p text-start">
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
            <p className="services-p text-start">
              At Bura Springs Family Medical Centre, we believe that knowledge
              is power when it comes to your health. That's why we offer
              comprehensive health education services to empower you to take
              control of your health and wellbeing. Our health education
              programs cover a wide range of topics, from disease prevention and
              management to healthy lifestyle habits and self-care practices.
              Our team of experienced healthcare professionals and educators
              provide personalized and interactive education sessions that are
              tailored to your individual needs and goals. We believe that by
              educating and empowering you, we can help you make informed
              decisions about your health and improve your quality of life.
              Contact us today to learn more about our health education services
              and take the first step towards a healthier, happier you.
            </p>
          </div>
          <div className="col">
            <img src={pharmacy} className="col-images" />
          </div>
        </div>
        <div className="row mt-2">
          <h3>HOMEBASED CARE CLINIC</h3>
          <div className="col">
            <img src={pharmacy} className="col-images" />
          </div>
          <div className="col">
            <p className="services-p text-start">
              Home-based care is the care of persons with chronic or terminal
              illnesses extended from the hospital or health facility to the
              patients' homes through family participation and community
              involvement within available resources and in collaboration with
              health care workers. It is a holistic and comprehensive care which
              relies on collaboration between the hospital, the family of the
              client, and the community, in order to enhance the quality of life
              of the patients and their families. The concept of Home-based care
              does not just address any disease condition but is intended for
              debilitating diseases that make patients unable to care for
              themselves. In HIV/AIDS for instance, we do not provide HBC to
              those who are HIV positive but to those with advanced AIDS
              illness. HBC concerns those who are sick but still able to care
              for themselves as well as those who are bedridden and unable to
              care for themselves.
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <h3>SURGICAL OUTPATIENT CLINIC</h3>
          <div className="col">
            <p className="services-p text-start">
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
            <img src={pharmacy} className="col-images" />
          </div>
        </div>
        <div className="row mt-2">
          <h3>DIABETES CLINIC</h3>
          <div className="col">
            <img src={pharmacy} className="col-images" />
          </div>
          <div className="col">
            <p className="services-p text-start">
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
            <p className="services-p text-start">
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
            <img src={pharmacy} className="col-images" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
