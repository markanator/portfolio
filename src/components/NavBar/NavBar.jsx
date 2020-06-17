import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";

import "./navbar.scss";

const Navbar = () => {
  const [values, setDarkMode] = useDarkMode("darkMode", false);

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* BRAND */}
        <div className="brand">
          <Link tag="a" to="/" className="brand-link">
            <span role="img" aria-label="taco/home" className="brand-emoji">
              🌮
            </span>{" "}
            Mark Ambrocio
          </Link>
        </div>
        {/* LINKS */}
        <div className="links">
          <Link tag="a" to="/me">
            About
          </Link>
          <Link tag="a" to="/portfolio">
            Portfolio
          </Link>
          <Link tag="a" to="/contact">
            Contact
          </Link>
        </div>
        {/* DARKMODE */}
        <div className="ctl">
          <button className="switch" onClick={setDarkMode}>
            {values ? (
              <span role="img" aria-label="sun mode">
                🌞
              </span>
            ) : (
              <span role="img" aria-label="dark mode">
                🌙
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
