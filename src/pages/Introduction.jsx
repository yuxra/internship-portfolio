import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/introduction.css";
import heroImg from "../assets/pkl.png"; // tambahin gambar ini ke folder assets
import visionImg from "../assets/pkl2.jpg";
import missionImg from "../assets/pkl3.png";
import teamworkImg from "../assets/pkl.png";

function Introduction() {
  return (
    <>
      <Navbar />
      <section className="intro-page">
        {/* Background glow */}
        <div className="intro-glow"></div>

        {/* HERO SECTION */}
        <div className="intro-hero" data-animate="fade-up">
          <div className="hero-text">
            <h1>Internship at <span className="highlight">Sarastya Technology Integrata</span></h1>
            <p>
              Explore how <strong>Sarastya</strong> empowers organizations by integrating
              <span className="highlight"> People, Process & Technology</span> — crafting
              sustainable, human-centered digital ecosystems.
            </p>
          </div>
          <div className="hero-img">
            <img src={heroImg} alt="Sarastya Technology Integrata" />
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="intro-section" data-animate="fade-up">
          <h2>Who We Are</h2>
          <div className="intro-flex">
            <img src={teamworkImg} alt="Teamwork at Sarastya" />
            <p>
              <strong>Sarastya Technology Integrata (STI)</strong> started as a business
              process automation provider and evolved into a comprehensive
              technology integrator under the Sarastya Group.  
              By combining <em>People, Process, and Technology</em>, STI helps
              organizations thrive amid complexity and innovation.
            </p>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="intro-section" data-animate="fade-up">
          <h2>Our Vision & Mission</h2>
          <div className="intro-boxes">
            <div className="intro-box">
              <img src={visionImg} alt="Vision" />
              <h3>Vision</h3>
              <p>
                To become a leading integrator of people-centric digital ecosystems that
                inspire transformation and create sustainable value.
              </p>
            </div>
            <div className="intro-box">
              <img src={missionImg} alt="Mission" />
              <h3>Mission</h3>
              <ul>
                <li>Empower organizations to redefine processes and experiences.</li>
                <li>Leverage cutting-edge technologies for innovation.</li>
                <li>Promote a culture of continuous growth and collaboration.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* INTERNSHIP EXPERIENCE */}
        <div className="intro-section" data-animate="fade-up">
          <h2>What I Learned During My Internship</h2>
          <p>
            During my internship at <strong>Sarastya Technology Integrata</strong>,
            I contributed to multiple web-based projects using modern frameworks,
            enhanced user interfaces with interactive design, and experienced how
            teamwork and technology blend to deliver real business impact.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Introduction;
