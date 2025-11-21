import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // <-- state dropdown

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true);
      setRole(userRole);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    setRole(null);
    setIsDropdownOpen(false); // tutup dropdown saat logout

    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo">
        Internship<span>Porto</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/biodata">Biodata</Link></li>
        <li><Link to="/introduction">PKL</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>

        {!isLoggedIn ? (
          <li>
            <Link to="/login" className="auth-btn">Login</Link>
          </li>
        ) : (
          <li className="profile-dropdown">
            <button
              className="profile-btn"
              onClick={toggleDropdown} // toggle dropdown saat klik
            >
              Profile
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                {role === "admin" && (
                  <Link to="/admin" className="dropdown-item">Admin Settings</Link>
                )}
                <Link to="/profile" className="dropdown-item">My Profile</Link>
                <button onClick={handleLogout} className="dropdown-item logout">
                  Logout
                </button>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
