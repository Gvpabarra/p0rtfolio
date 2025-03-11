// File: Contact.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";  // Ensure this file exists and is correctly linked

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "", // Changed from firstName to match backend
    lastname: "",  // Changed from lastName to match backend
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend route
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("You have successfully subscribed as a contact!");
        navigate("/");
      } else {
        alert("Error subscribing as a contact.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        Have questions or want to work together? Fill out the form below and I’ll get back to you!
      </p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstname" // Changed from firstName
              placeholder="First Name"
              required
              value={formData.firstname}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="text"
              name="lastname" // Changed from lastName
              placeholder="Last Name"
              required
              value={formData.lastname}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <button type="submit" className="contact-button">
            Subscribe as Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
