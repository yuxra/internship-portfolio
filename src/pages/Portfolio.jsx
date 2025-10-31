import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Proyek Portofolio</h1>
        <ul>
          <li>🌐 Website Portofolio Pribadi</li>
          <li>🏢 Dashboard PKL (React.js + API)</li>
          <li>🎨 Desain UI Futuristik untuk Landing Page</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
