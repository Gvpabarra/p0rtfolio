// File: Layout.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Mar 11, 2025

import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../src/assets/Logo.png";
import "../src/navbar.css";

const Layout = () => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleStorageChange = () => setIsLoggedIn(!!localStorage.getItem("token"));

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
          GV Website
        </Link>

        <div className={`nav-links ${menuActive ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>

          {isLoggedIn && <Link to="/records">Records</Link>}

          {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-item">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="nav-item">
              Sign In
            </Link>
          )}
        </div>

        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
