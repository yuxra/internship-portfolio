import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Introduction() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Tentang Tempat PKL</h1>
        <p>
          Saya menjalani PKL di Sarastya Agility — perusahaan konsultan yang berfokus 
          pada transformasi organisasi dengan pendekatan teknologi dan inovasi.
        </p>
        <p>
          Di sana saya terlibat dalam beberapa proyek berbasis React dan desain UI modern.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Introduction;
