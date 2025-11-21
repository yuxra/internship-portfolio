import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/biodata.css";
import profileImg from "../assets/test.png"; // ganti nama file sesuai asetmu

function Biodata() {
  return (
    <>
      <Navbar />
      <section className="bio-page">
        <div className="bio-glow"></div>

        <div className="bio-container">
          {/* HEADER */}
          <div className="bio-header" data-animate="fade-up">
            <h1>About Me</h1>
            <p className="bio-subtitle">
              Hi, I’m <span className="highlight">Rasikah</span> — passionate about turning ideas into interactive and meaningful web experiences.
            </p>
          </div>

          {/* PROFILE SECTION */}
          <div className="bio-profile" data-animate="fade-up">
            <div className="bio-image-wrapper">
              <div className="bio-glow-circle"></div>
              <img src={profileImg} alt="Rasikah" className="bio-profile-img" />
            </div>
            <div className="bio-intro">
              <h2>Fullstack Developer in Progress</h2>
              <p>
                I have a strong interest in <span>frontend development</span>,
                especially in creating interactive and visually appealing web interfaces.
                From that passion, I started learning the <span>backend</span> side as well,
                because I aim to become a <span>fullstack developer</span> capable of
                building applications from the interface to the system.
                For me, the world of programming is where <span>creativity meets logic</span>,
                and that’s what keeps me motivated to keep learning and improving.
              </p>
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="bio-content">
            <div className="bio-card" data-animate="float">
              <h2>Personal Info</h2>
              <ul>
                <li><strong>Name:</strong> Rasikah</li>
                <li><strong>Field:</strong> Web Design & Frontend Development</li>
                <li><strong>Skills:</strong> HTML, CSS, JavaScript, React.js</li>
                <li><strong>Location:</strong> Indonesia</li>
              </ul>
            </div>

            <div className="bio-card" data-animate="float-delay">
              <h2>Current Focus</h2>
              <p>
                Expanding my skills into backend technologies to gain a deeper understanding of
                how web applications work from end to end — becoming a versatile and adaptive fullstack developer.
              </p>
            </div>
          </div>

          {/* SKILL SECTION */}
          <div className="bio-skill-section" data-animate="fade-up">
            <h2>Technical Skills</h2>
            <div className="skill-bars">
              <div className="skill">
                <span>HTML</span>
                <div className="bar"><div className="progress" style={{ width: "95%" }}></div></div>
              </div>
              <div className="skill">
                <span>CSS</span>
                <div className="bar"><div className="progress" style={{ width: "90%" }}></div></div>
              </div>
              <div className="skill">
                <span>JavaScript</span>
                <div className="bar"><div className="progress" style={{ width: "85%" }}></div></div>
              </div>
              <div className="skill">
                <span>React.js</span>
                <div className="bar"><div className="progress" style={{ width: "88%" }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Biodata;
