import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Login from "./components/Login";
// import DoctorLogin from "./components/DoctorLogin";
import ConsultationForm from "./components/AppointmentForm";

import Register from "./components/Register";
import FooterComponent from "./components/Footer";
import DiseaseInfo from "./components/DiseaseInfo";
import "./App.css";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        <Route path="/diseaseInfo" element={<DiseaseInfo />} />
        {/* <Route path="/doctor-login" element={<DoctorLogin />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <FooterComponent />

      {/* <Prediction /> */}
    </Router>
  );
}

export default App;
