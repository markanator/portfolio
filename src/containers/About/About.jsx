import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [hover, setHover] = useState(false);

  return (
    <div className="container">
      <article className="about-wrapper">
        <header>
          <h1>About me </h1>
        </header>
        <div className="page">
          <p>
            My name is Mark Ambrocio, and I am a full stack web developer and game
            developer. I am an experienced and reliable, hardworking professional with eight years of honorable military service. Excelling in customer satisfaction across a variety of different countries and languages. Adept at handling multiple scenarios simultaneously with the highest degree of professionalism and attention to detail. 
          </p>
          <h3
            id="Mark"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ position: "relative" }}
          >
            <Link tag="a" to="/me/#Mark" className="anchor before">
              {hover ? (
                <span role="img" aria-label="link">
                  🔗
                </span>
              ) : null}
            </Link>
            Mark:
          </h3>
          <ul>
            <li>
              <span role="img" aria-label="list item">
                💻
              </span>{" "}
              Lambda School, graduating 9/2021
            </li>
            <li>
              <span role="img" aria-label="list item">
                🏫
              </span>{" "}
              DePaul University, graduating 5/2022
            </li>
            <li>
              <span role="img" aria-label="list item">
                🎮
              </span>{" "}
              Passion for creating interactive media
            </li>
            <li>
              <span role="img" aria-label="list item">
                🌯
              </span>{" "}
              Native Spanish speaker
            </li>
            <li>
              <span role="img" aria-label="list item">
                🥤
              </span>{" "}
              Soda &gt; Coffee
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
