// File: Education.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React from "react";
import centennialImage from "../src/assets/centennial-college.jpg"; 
import tarlacImage from "../src/assets/tarlac-university.jpg"; 

const Education = () => {
  const educationList = [
    {
      institution: "Centennial College – Toronto, ON",
      degree: "Advanced Diploma in Software Engineering Technology (Co-op)",
      duration: "September 2024 – Present",
      gpa: "GPA: 4.1/4.5 (A)",
      keyCourses: [
        "Testing & QA",
        "Mobile App Development",
        "Java Programming",
        "SQL",
        "Web Application Development",
        "Software Systems Design",
        "Data Structures & Algorithms",
      ],
      image: centennialImage,
    },
    {
      institution: "Tarlac Agricultural University – Tarlac, Philippines",
      degree: "Bachelor of Science in Information Technology",
      duration: "August 2018 – June 2022",
      certifications: [
        "International Internship Program (OJT) – Certificate of Completion",
        "English Proficiency Program – Certificate of Completion",
      ],
      image: tarlacImage,
    },
  ];

  return (
    <div className="education">
      <h1 className="education-title">My Education</h1>
      <div className="education-container">
        {educationList.map((edu, index) => (
          <div key={index} className="education-card">
            <img src={edu.image} alt={edu.institution} className="education-image" />
            <div className="education-details">
              <h2 className="education-institution">{edu.institution}</h2>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-duration">{edu.duration}</p>
              {edu.gpa && <p className="education-gpa">{edu.gpa}</p>}
              {edu.keyCourses && (
                <div>
                  <h3>Key Courses:</h3>
                  <ul className="education-list">
                    {edu.keyCourses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
              {edu.honors && <p className="education-honors">{edu.honors}</p>}
              {edu.certifications && (
                <div>
                  <h3>Certifications:</h3>
                  <ul className="education-list">
                    {edu.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
