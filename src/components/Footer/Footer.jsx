import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer container">
      <div>
        <a
          href="https://ko-fi.com/markanator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ko-Fi
        </a>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <p>&copy; 2020 Mark Ambrocio</p>
      </div>
    </footer>
  );
}
