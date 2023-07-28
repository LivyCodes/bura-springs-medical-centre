import React from "react";
import incinerator from "./assets/incinerator.jpeg";

function Hazard() {
  return (
    <div>
      <div class="hero hero-1 d-flex">
        <h1>HAZARDOUS WASTE MANAGEMENT</h1>
      </div>
      <div className="container">
        <h4 className="title">Waste Management</h4>
        <p>
          Waste and by-products cover a diverse range of materials, as the
          following list illustrates:
          <ol>
            <li>
              <strong>Infectious waste:</strong>
            </li>
            <p>
              waste contaminated with blood and other bodily fluids (e.g. from
              discarded diagnostic samples), cultures and stocks of infectious
              agents from laboratory work (e.g. waste from autopsies and
              infected animals from laboratories), or waste from patients with
              infections (e.g. swabs, bandages and disposable medical devices);
            </p>
            <li>
              <strong>Pathological waste:</strong>
            </li>
            <p>
              human tissues, organs or fluids, body parts and contaminated
              animal carcasses;
            </p>
            <li>
              <strong>Sharps waste:</strong>
            </li>
            <p>syringes, needles, disposable scalpels and blades, etc.;</p>
            <li>
              <strong>Chemical waste:</strong>
            </li>
            <p>
              for example solvents and reagents used for laboratory
              preparations, disinfectants, sterilants and heavy metals contained
              in medical devices (e.g. mercury in broken thermometers) and
              batteries;
            </p>
            <div className="row">
              <div className="col">
                <img src={incinerator} className="hospital-image" />
                <p className="text-center">The incinerator</p>
              </div>
            </div>
            <li>
              <strong>Pharmaceutical waste:</strong>
            </li>
            <p>expired, unused and contaminated drugs and vaccines;</p>
            <li>
              <strong>Cytotoxic waste:</strong>
            </li>
            <p>
              waste containing substances with genotoxic properties (i.e. highly
              hazardous substances that are, mutagenic, teratogenic or
              carcinogenic), such as cytotoxic drugs used in cancer treatment
              and their metabolites;
            </p>
            <li>
              <strong>Radioactive waste:</strong>
            </li>
            <p>
              such as products contaminated by radionuclides including
              radioactive diagnostic material or radiotherapeutic materials;
            </p>
            <li>
              <strong>Non-hazardous or general waste:</strong>
            </li>
            <p>
              waste that does not pose any particular biological, chemical,
              radioactive or physical hazard.
            </p>
            <br />
            <p>
              All our waste are normally disposed and burnt in our hospital
              incinerators.
            </p>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default Hazard;
