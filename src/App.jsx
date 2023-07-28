import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./logo";
import VisionMission from "./VisionMission";
import Histori from "./Histori";
import Services from "./Services";
import Rescue from "./Rescue";
import Hazard from "./HazardWaste";
import Contacts from "./Contacts";
import HomePage from "./HomePage";
import Marketing from "./Marketing";
import Footer from "./footer";
import "./App.css";

function App() {
  return (
    <div className="responsive-div">
      <Router>
        <div>
          <Logo />
          <NavBar />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/VisionMission" element={<VisionMission />} />
            <Route exact path="/Histori" element={<Histori />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Contacts" element={<Contacts />} />
            <Route exact path="/Rescue" element={<Rescue />} />
            <Route exact path="/Hazard" element={<Hazard />} />
            <Route exact path="/Marketing" element={<Marketing />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
