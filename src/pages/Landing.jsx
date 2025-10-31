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
