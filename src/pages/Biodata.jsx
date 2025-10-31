import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Biodata() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Biodata Lengkap</h1>
        <p>Nama: Sarastya</p>
        <p>Bidang: Web Design & Frontend Development</p>
        <p>Keahlian: HTML, CSS, JavaScript, React.js</p>
      </div>
      <Footer />
    </>
  );
}

export default Biodata;
