import React from "react";
import "./rescue.css";

function Rescue() {
  return (
    <div>
      <div class="hero hero-1 d-flex">
        <h1>RESCUE</h1>
      </div>
      <div className="container">
        <h4 className="mt-3">Accident & Emergency</h4>
        <p>
          A&E patients present with potentially life threatening symptoms such
          as headache, chest pain, abdominal pain, collapse of unknown cause and
          severe injury. Such patients have pressing need(s) and may present
          without prior appointment. They may also report to the unit on their
          own or by ambulance. It uses a triage system of screening and
          classifying clients to determine their priority needs and to measure
          patient care efficiently and is usually done by a qualified nurse.
          Some of the groupings include:
          <br />
          <ul className="centered-ul text-start">
            <li>Peadiatric patients</li>
            <li>Pregnant mothers</li>
            <li>The elderly</li>
            <li>School going kids</li>
            <li>Critical intervention of all kind</li>
          </ul>
          <br />
          Once the nurse at triage assess all patients presenting to the A&E
          she/he transfers them to a medical officers in the unit who then
          involves expanded team which include: Paediatrician, Gynaecologist,
          and COSECSA Registrars for critical decision making. The medical
          officer on duty may request consultation with another specialist for a
          patient in the A & E."Referral to Consultants Clinic or Hospital of
          Choice"
          <br />
          Procedures offered in the Accident and Emergency Unit:
          <ul className="text-start">
            <li>ECG</li>
            <li>Ear Syringing</li>
            <li>Drug Administration</li>
            <li>Pap Smears</li>
            <li>Nebulizations</li>
            <li>Wound Care/Dressing</li>
            <li>Suturing of Wounds</li>
            <li>Minor procedures i.e. incision of drainage</li>
            <li>Plaster Applications and Removal</li>
            <li>Fluid Therapy Replacement</li>
          </ul>
          <br />
          In case of Emergencies our Emergency Rooms are well equipped with
          trained personnel and all the required items i.e. Monitors and Vents.
          Ambulance well equipped with well trained personnel. Other services
          offered in the have unit include:
          <ul className="text-start">
            <li>Sexual Gender Based Violence (SGBV)</li>
            <li>
              Laboratory and Radiology services(to fast track patients care)
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Rescue;
