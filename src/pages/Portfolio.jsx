import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/portfolioTimeline.css";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [role, setRole] = useState(null);
  const baseURL = "http://localhost:5083";

  useEffect(() => {
    fetch(`${baseURL}/api/Portfolios`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch portfolios:", err));

    const r = localStorage.getItem("role");
    if (r) setRole(r);
  }, []);

  // Group projects by month (key = "YYYY-M")
  const groupByMonth = projects.reduce((acc, item) => {
    const date = new Date(item.createdAt);
    const monthKey = date.getFullYear() + "-" + (date.getMonth() + 1); // YYYY-M
    if (!acc[monthKey]) acc[monthKey] = [];
    acc[monthKey].push(item);
    return acc;
  }, {});

  // Sort months ascending (oldest → newest)
  const sortedMonthKeys = Object.keys(groupByMonth).sort(
    (a, b) => new Date(a + "-01") - new Date(b + "-01")
  );

  return (
    <>
      <Navbar />

      <div className="timeline-page">
        <div className="timeline-header">
          <h5 className="timeline-subtitle">Internship Projects</h5>
          <h1 className="timeline-title">
            Projects I Contributed to During My <span>Internship</span>
          </h1>
          <p className="timeline-desc">
            A collection of systems, applications, and digital solutions that I helped
            design and develop during my internship.
          </p>
        </div>

        {sortedMonthKeys.map((key) => {
          const items = groupByMonth[key];
          const firstDate = new Date(items[0].createdAt);
          const monthName = firstDate.toLocaleString("en-US", { month: "long", year: "numeric" });

          return (
            <div key={key} className="timeline-month-section">
              <h2 className="timeline-month">{monthName}</h2>
              <div className="timeline-divider"></div>

              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`timeline-item ${index % 2 === 0 ? "left-image" : "right-image"}`}
                >
                  <div className="timeline-img-wrapper">
                    <img src={item.imageUrl} alt={item.title} className="timeline-img" />
                  </div>

                  <div className="timeline-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="tech-stack">
                      <span>{item.framework}</span> • <span>{item.language}</span>
                    </div>

                    {item.videoLink && (
                      <a
                        href={item.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn view-demo-btn"
                      >
                        View Demo
                      </a>
                    )}

                    {role === "admin" && (
                      <button
                        className="btn edit-btn"
                        onClick={() => (window.location.href = `/portfolio/edit/${item.id}`)}
                      >
                        Edit Project
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Portfolio;
