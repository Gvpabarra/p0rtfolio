// File: Services.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React from "react";
import softwareDevImg from "../src/assets/software-dev.jpg";
import technicalServicesImg from "../src/assets/technical-services.jpg";
import creativeDesignImg from "../src/assets/creative-design.jpg";
import techConsultingImg from "../src/assets/tech-consulting.jpg";

const Services = () => {
  const serviceCategories = [
    {
      title: "Software & Web Development",
      image: softwareDevImg,
      services: [
        "Full-Stack Web Development – Creating responsive, dynamic websites and applications using HTML, CSS, JavaScript, React, and Node.js.",
        "Front-End Development – Building user-friendly interfaces with an emphasis on UI/UX design and accessibility.",
        "Back-End Development – Developing robust backend systems using SQL, MySQL, MongoDB, and integrating server-side logic.",
      ],
    },
    {
      title: "Software Solutions & Technical Services",
      image: technicalServicesImg,
      services: [
        "Custom Software Development – Developing tailored applications for businesses, startups, and individuals.",
        "Database Management – Designing and optimizing databases with SQL, MySQL, and Oracle for efficient data storage and retrieval.",
        "Software Quality Assurance & Testing – Ensuring software reliability through debugging, testing, and troubleshooting.",
      ],
    },
    {
      title: "Creative & Visual Design",
      image: creativeDesignImg,
      services: [
        "UI/UX Design – Designing engaging and user-centric interfaces for web and mobile applications.",
        "Graphic Design & Layout – Creating stunning visuals, branding elements, and layouts using Adobe Photoshop, Illustrator, and Canva.",
        "Video Editing & Production – Editing promotional and educational videos using Sony Vegas and Adobe Premiere Pro.",
      ],
    },
    {
      title: "IT & Tech Consulting",
      image: techConsultingImg,
      services: [
        "Tech Consultation – Providing guidance on software architecture, development workflows, and database management.",
        "Website Redesign & Optimization – Enhancing website performance, navigation, and aesthetics for a better user experience.",
        "Training & Mentorship – Offering tutorials and workshops on programming, database management, and software development best practices.",
      ],
    },
  ];

  return (
    <div className="services">
      <h1 className="services-title">My Services</h1>
      <div className="services-grid">
        {serviceCategories.map((category, index) => (
          <div key={index} className="service-card">
            <img
              src={category.image}
              alt={category.title}
              className="service-image"
            />
            <h2 className="service-title">{category.title}</h2>
            <ul className="service-list">
              {category.services.map((service, idx) => (
                <li key={idx} className="service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;