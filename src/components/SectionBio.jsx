import React from "react";
import profile from "../assets/me.png"; // ganti sesuai foto kamu

function SectionBio() {
  return (
    <section id="bio" className="bio-section">
      <div className="bio-bg"></div>

      <div className="bio-inner">
        <div className="bio-left">
          <div className="bio-image-wrapper">
            <img src={profile} alt="Rasikah" className="bio-image" />
            <div className="bio-glow"></div>
          </div>
        </div>

        <div className="bio-right">
          <h1 className="bio-hello">
            <span>Hey, I’m</span>
            <br />
            <span className="highlight">Rasikah</span>
          </h1>
          <p className="bio-desc">
            A front-end developer & creative designer passionate about crafting
            minimal interfaces that feel <span>alive</span>.  
            I love combining smooth animations, clean typography, and bold
            visuals to tell stories through the web.
          </p>

          <div className="bio-actions">
            <a href="#portfolio" className="bio-btn accent">View My Work</a>
            <a href="mailto:rasikah@example.com" className="bio-btn">Contact Me</a>
          </div>

          <div className="bio-socials">
            <a href="https://github.com/rasikah" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/rasikah" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/rasikah" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBio;
