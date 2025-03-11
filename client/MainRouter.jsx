// File: MainRouter.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Mar 11, 2025

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './src/about';
import Contact from './src/contact';
import Education from './src/education';
import Layout from './Components/Layout'; 
import Home from './Components/Home';
import Projects from "./src/Projects";
import Services from "./src/Services"; 
import LoginRegister from "./src/LoginRegister"; 
import Records from "./src/Records";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<LoginRegister />} />
        <Route path="records" element={<Records />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
