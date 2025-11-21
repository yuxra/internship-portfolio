import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Biodata from "./pages/Biodata";
import Introduction from "./pages/Introduction";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditPortfolio from "./pages/EditPortofolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/biodata" element={<Biodata />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio/edit/:id" element={<EditPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
