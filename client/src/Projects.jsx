// File: Projects.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React from "react";
import project1 from "../src/assets/project1.jpg";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";

const Projects = () => {
  const projectList = [
    {
      title: "HealthCare Website",
      description:
        "Developed and designed the website content using HTML, CSS, TypeScript",
      image: project1,
    },
    {
      title: "Trading Website",
      description:
        "A web app developed using WordPress for international product trading.",
      image: project2,
    },
    {
      title: "Book Layout Graphic Design",
      description:
        "Layout design and graphic design for newsletters, tabloids, and folios using Adobe tools for post-secondary institution publications.",
      image: project3,
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
