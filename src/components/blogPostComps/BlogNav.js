/* eslint-disable react/button-has-type */
import React from 'react'
import { Link } from 'gatsby'
// locals
import { useDarkMode } from '../../hooks/DarkModeContext'

// eslint-disable-next-line react/prop-types
export default function BlogNav() {
  // eslint-disable-next-line react/prop-types

  const { lights, toggleLights } = useDarkMode()

  return (
    <nav className="nav__blog" style={{ zIndex: '99' }}>
      <div className="nav-container">
        {/* BRAND */}
        <div className="brand">
          <Link to="/" className="brand-link">
            <span
              role="img"
              aria-label="taco/home"
              className="brand-emoji favicon"
            >
              🌮
            </span>{' '}
            <span className="text">Mark Ambrocio</span>
          </Link>
        </div>
        {/* LINKS */}
        <div className="links">
          <Link to="/#about">About</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </div>
        {/* DARKMODE */}
        <div className="ctl">
          <button className="switch" onClick={toggleLights}>
            {lights ? (
              <span role="img" aria-label="sun mode" className="theme-icon">
                🌞
              </span>
            ) : (
              <span role="img" aria-label="dark mode" className="theme-icon">
                🌙
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
