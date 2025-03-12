// File: LoginRegister.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Mar 10, 2025

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";

const LoginRegister = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Login or Register)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "/api/users/signin" : "/api/users";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);

        window.dispatchEvent(new Event("storage"));

        alert(isLogin ? "Login successful!" : "Registration successful!");
        navigate("/records");
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="auth-btn">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
        {isLogin ? "Don't have an account? Register here" : "Already have an account? Login here"}
      </p>
    </div>
  );
};

export default LoginRegister;
