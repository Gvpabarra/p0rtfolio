// File: Home.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React, { useState, useEffect } from "react";
import Plx from "react-plx";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <h1>LOADING...</h1>
      </div>
    );
  }

  // Parallax data for IMAGES
  const foregroundParallaxData = [
    {
      start: 0,
      end: 700,
      easing: "ease-in",
      properties: [
        {
          startValue: 1,
          endValue: 1.6,
          property: "scale",
        },
      ],
    },
  ];

  const backgroundParallaxData = [
    {
      start: 0,
      end: 800,
      properties: [
        {
          startValue: 1,
          endValue: 1.18,
          property: "scale",
        },
      ],
    },
  ];

  // Parallax data for the text overlay image (fades out)
  const textOverlayParallaxData = [
    {
      start: 0,
      end: 400,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];

  // *** HORIZONTAL PARALLAX for each text block ***
  const text1ParallaxData = [
    {
      start: 300,
      end: 600,
      properties: [
        {
          startValue: -100,
          endValue: 0,
          property: "translateX",
          unit: "px",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  const text2ParallaxData = [
    {
      start: 400,
      end: 700,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
          unit: "px",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  const text3ParallaxData = [
    {
      start: 500,
      end: 800,
      properties: [
        {
          startValue: -100,
          endValue: 0,
          property: "translateX",
          unit: "px",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  const text4ParallaxData = [
    {
      start: 600,
      end: 900,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
          unit: "px",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  const text5ParallaxData = [
    {
      start: 700,
      end: 1000,
      properties: [
        {
          startValue: -100,
          endValue: 0,
          property: "translateX",
          unit: "px",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  return (
    <div className="home-container">
      {/* Foreground parallax layer (images) */}
      <Plx parallaxData={foregroundParallaxData} className="parallax-layer foreground">
        <img src="bg.png" alt="Foreground" />
      </Plx>

      {/* Background parallax layer (images) */}
      <Plx parallaxData={backgroundParallaxData} className="parallax-layer background">
        <img src="backgroundstretched.png" alt="Background" />
      </Plx>

      {/* Text overlay that fades out */}
      <Plx parallaxData={textOverlayParallaxData} className="parallax-layer text-overlay">
        <img src="/text-img.png" alt="Overlay" />
      </Plx>

      {/* Dark overlay for controlling how the user scrolls */}
      <div className="dark-overlay">
        <div className="dark-overlay-inner"></div>
      </div>

      {/* Hero section with your text */}
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-text">
            {/* Horizontal parallax for each text block. */}
            <Plx parallaxData={text1ParallaxData} className="hidden-left">
              <h1>Welcome to My Digital Space!</h1>
            </Plx>

            <Plx parallaxData={text2ParallaxData} className="hidden-right">
              <p>
                Hi, I’m <strong>Gabriel Abarra</strong>, a Software Engineer,
                Web Developer, and Creative Designer passionate about crafting
                innovative digital solutions. Whether it’s building dynamic web
                applications, designing intuitive user experiences, or ensuring
                top-notch software quality, I’m always eager to turn ideas into
                reality. Explore my work, check out my projects, and feel free
                to connect—let’s create something amazing together!
              </p>
            </Plx>

            <Plx parallaxData={text3ParallaxData} className="hidden-left">
              <h1>Mission Statement</h1>
            </Plx>

            <Plx parallaxData={text4ParallaxData} className="hidden-right">
              <p>
                As a dedicated Software Engineer with a passion for web
                development, creative design, and quality assurance, I thrive on
                building user-centric solutions that blend functionality with
                aesthetics. With expertise in full-stack development, database
                management, and agile methodologies, I strive to create seamless
                digital experiences. My mission is to continuously innovate,
                solve complex problems, and contribute to projects that make a
                meaningful impact.
              </p>
            </Plx>

            <Plx parallaxData={text5ParallaxData} className="hidden-left">
              <a href="/about" className="home-button">
                Read More About Me
              </a>
            </Plx>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} GV Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
