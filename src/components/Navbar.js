import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <Link to="/" className="brand">
          🩺EarlyCure
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/diseaseInfo">Prediction</Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors">Doctors</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link> {/* Single Login link */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;
