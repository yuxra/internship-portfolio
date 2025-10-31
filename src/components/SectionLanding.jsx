import React from "react";
import profileImg from "../assets/test.png"; // ganti dengan fotomu

function SectionLanding() {
  return (
    <section className="section landing neon-hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            I’m <span>Rasikah</span>
            <br /> Web Developer
          </h1>
          <p>
            Passionate about building elegant, functional web experiences with
            a modern touch.
          </p>
          <a href="#porto" className="btn">View My Projects</a>
        </div>

        <div className="hero-img">
          <img src={profileImg} alt="Sarastya" />
          <div className="glow-circle"></div>
        </div>
      </div>

      <div className="floating-card left">
        <h4>Internship Student</h4>
        <p>Four month of participating and learning</p>
      </div>
      <div className="floating-card right">
        <h4>Learning</h4>
        <p>Frontend 92% <br /> Backend 80%</p>
      </div>
    </section>
  );
}

export default SectionLanding;
