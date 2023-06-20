import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import HomeCare from "./HomeCare";
import Rescue from "./Rescue";
import Hazard from "./HazardWaste";
import Contacts from "./Contacts";
import HomePage from "./HomePage";

import "./App.css";

function App() {
  return (
    <div className="responsive-div">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/HomeCare" element={<HomeCare />} />
            <Route exact path="/Contacts" element={<Contacts />} />
            <Route exact path="/Rescue" element={<Rescue />} />
            <Route exact path="/Hazard" element={<Hazard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
