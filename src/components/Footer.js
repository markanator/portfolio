/* eslint-disable react/prop-types */
import { Link } from 'gatsby'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>
          <a
            href="https://ko-fi.com/markanator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-Fi
          </a>
          <Link to="/#contact">Contact</Link>
        </span>

        <p>&copy; {new Date().getFullYear()} Mark Ambrocio</p>
      </div>
    </footer>
  )
}
