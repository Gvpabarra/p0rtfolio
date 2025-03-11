// File: About.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";
import "./About.css";

const About = () => {
  const parallaxRef = useRef();

  useEffect(() => {
    document.body.classList.add("about-active");

    return () => {
      document.body.classList.remove("about-active");
    };
  }, []);

  return (
    <div className="about-parallax">
      <Parallax pages={4} ref={parallaxRef} className="parallax-wrapper">
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        />

        <ParallaxLayer sticky={{ start: 0, end: 4 }} style={{ textAlign: "center", pointerEvents: "none" }}>
          <img src={cat} alt="Animated Cat" className="cat-img" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.05}>
          <h2 className="about-heading">About Me</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1}>
          <div className="about-content">
            <p>
              Hello! I’m <strong>Gabriel Abarra</strong>, a passionate Software Engineer, Web Developer, and 
              Creative Designer based in Toronto, ON. With a strong foundation in software development, 
              database management, and UI/UX design, I specialize in creating innovative and 
              user-friendly digital solutions.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1}>
          <div className="about-content">
            <ul>
              <li>
                <strong>Web Development & Design:</strong> Designed and developed websites with HTML, CSS, TypeScript, and React.
              </li>
              <li>
                <strong>Software & Database Development:</strong> Built applications like a grading system with JavaFX and Oracle Database, and a fraction calculator in C# with Windows Forms.
              </li>
              <li>
                <strong>Creative & Visual Design:</strong> Experience in layout design, video editing, and graphic design using Adobe Creative Suite, Sony Vegas, and Canva.
              </li>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.1}>
          <div className="about-content">
            <p>
              I am always eager to learn, innovate, and contribute to meaningful projects. 
              Let’s connect and build something amazing together!
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={0.1}>
          <div className="resume-download">
            <h2 className="resume-heading">Download My Resume</h2>
            <button className="resume-button" onClick={() => window.open("/resume.pdf")}>
              Get My Resume
            </button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default About;
