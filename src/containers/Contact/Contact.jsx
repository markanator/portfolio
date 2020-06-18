import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [hover, setHover] = useState(false);
  const around = "Socials";

  return (
    <div className="container">
      <article className="about-wrapper">
        <header>
          <h1>Contact me </h1>
        </header>
        <div className="page">
          <p>
            Email me at <b>mark</b> dot <b>ambro</b> at <b>me</b> dot <b>com</b>{" "}
            if you'd like to speak to me.
          </p>
          <p>I am currently available for freelance opportunities, email me or reach me on Linkedin.</p>
          <h3
            id={around}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ position: "relative" }}
          >
            <Link tag="a" to={`/contact/#${around}`} className="anchor before">
              {hover ? (
                <span role="img" aria-label="link">
                  🔗
                </span>
              ) : null}
            </Link>
            {around}
          </h3>
          <ul>
            <li>
              <b>Github</b>:{" "}
              <a href="https://github.com/markanator">markanator</a>
            </li>
            <li>
              <b>Linkedin</b>:{" "}
              <a href="https://www.linkedin.com/in/mark-ambro/">Mark A.</a>
            </li>
            <li>
              <b>Twitter</b>:{" "}
              <a href="https://twitter.com/Mark_Ambrocio1">@Mark_Ambrocio1</a>
            </li>
            <li>
              <b>Ko-Fi</b>:{" "}
              <a href="https://ko-fi.com/markanator">markanator</a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
