import React, { useEffect, useState } from "react";
import "../styles/sectionporto.css";

function SectionPorto() {
  const [projects, setProjects] = useState([]);
  const baseURL = "http://localhost:5083"; // ubah ke env atau var global kalau perlu

  useEffect(() => {
    fetch(`${baseURL}/api/Portfolios`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch portfolios:", err));
  }, []);

  return (
    <section id="porto" className="section-porto">
      <div className="porto-header">
        <div>
          <h5 className="porto-subtitle">Portfolio</h5>
          <h2 className="porto-title">
            Transforming Ideas into <span>Digital Experiences</span>
          </h2>
          <p className="porto-desc">
            Here are some of the projects I’ve worked on — blending creativity,
            functionality, and modern design to deliver impactful results.
          </p>
        </div>
        <a href="/portfolio" className="porto-view-more">
          View More →
        </a>
      </div>

      <div className="porto-grid">
        {projects.slice(0, 4).map((item) => (
          <div key={item.id} className="porto-card">
            <div className="porto-img-wrapper">
              <img
                src={`${baseURL}/uploads/${item.imageUrl}`}
                alt={item.title}
                className="porto-img"
              />
            </div>
            <div className="porto-card-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionPorto;
