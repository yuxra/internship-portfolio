import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="neon-footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Sarastya Technology Integrata is a technology integrator focusing
            on <span>People</span>, <span>Process</span>, and{" "}
            <span>Technology</span> to deliver sustainable digital solutions.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#porto">Projects</a></li>
            <li><a href="#pkl">Internship</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="footer-section posts">
          <h3>Latest Posts</h3>
          <div className="post-item">
            <img
              src="https://via.placeholder.com/60x60"
              alt="post"
            />
            <div>
              <p>Integrating AI with BPMN Solutions</p>
              <span>Oct 20, 2025</span>
            </div>
          </div>
          <div className="post-item">
            <img
              src="https://via.placeholder.com/60x60"
              alt="post"
            />
            <div>
              <p>Enhancing Workflow Automation</p>
              <span>Oct 5, 2025</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhone /> +62 812 3456 7890</p>
          <p><FaEnvelope /> info@sarastya.co.id</p>
          <p><FaMapMarkerAlt /> Jl. Teknologi No. 7, Jakarta</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span>Rasikah</span>. Crafted with React.js</p>
      </div>
    </footer>
  );
}

export default Footer;
