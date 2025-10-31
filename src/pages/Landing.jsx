import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLanding from "../components/SectionLanding";
import SectionBio from "../components/SectionBio";
import SectionIntro from "../components/SectionIntro";
import SectionPorto from "../components/SectionPorto";
import "../styles/sections.css";

function Landing() {
  return (
    <>
      <Navbar />
<div className="animated-bg">
  {/* Bintang random */}
  {Array.from({ length: 25 }).map((_, i) => (
    <div
      key={i}
      className="star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    ></div>
  ))}
  
  {/* Lingkaran pulse random */}
  {Array.from({ length: 5 }).map((_, i) => (
    <div
      key={`circle-${i}`}
      className="pulse-circle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${100 + Math.random() * 200}px`,
        height: `${100 + Math.random() * 200}px`,
        animationDelay: `${Math.random() * 4}s`,
      }}
    ></div>
  ))}
</div>

      <div className="landing-container">
        <SectionLanding />
        <SectionBio />
        <SectionIntro />
        <SectionPorto />
      </div>
      <Footer />
    </>
  );
}

export default Landing;
