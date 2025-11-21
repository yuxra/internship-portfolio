import React from "react";
import bgImage from "../assets/pkl.png"; // ganti dengan gambar background kamu

function SectionPKL() {
  return (
    <section
      id="pkl"
      className="section-pkl"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="pkl-overlay">
        <div className="pkl-card">
          <div className="quote-icon">“</div>
          <h2 className="pkl-title">About My Internship Place</h2>
          <p className="pkl-desc">
            <strong>Sarastya Technology Integrata (STI)</strong> was established on
            May 5, 2014, originally named <em>PT RetGoo Sentris Informa (RSI)</em>,
            focusing on developing business process automation systems based on
            BPMN 2.0.  
            Over time, the company evolved from a software automation provider into
            a part of the <strong>Sarastya Group</strong> ecosystem in 2023, and
            later became known as <strong>Sarastya Technology Integrata</strong>.
            <br /><br />
            This transformation marked STI’s expansion into an integrative
            technology developer — combining aspects of <em>People, Process, and
            Technology</em> — and a commitment to delivering sustainable digital
            solutions for modern organizations in Indonesia.
          </p>

          <div className="pkl-footer">
            <div className="pkl-person">
              <img src="./src/assets/logo_sti.png" alt="STI logo" />
              <div>
                <h4>Sarastya Technology Integrata</h4>
                <p>Technology Integrator — Since 2014</p>
              </div>
            </div>
            <a href="/introduction" className="pkl-btn">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPKL;
