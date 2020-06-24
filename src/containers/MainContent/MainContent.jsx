import React from "react";
// github btn api
import GitHubButton from "react-github-btn";
// router stuff
import { Link } from "react-router-dom";
// styles
import "./mainContent.scss";
import Avatar from '../../assets/img/avatar.jpg';

export default function MainContent() {
  return (
    <div className="hero-main">
      <div className="container">
        <div className="hero">
          {/* LeftSide */}
          <div className="opord">
            <h1>Hi, I'm Mark</h1>
            <p>
              I'm a <strong>full stack software developer</strong> and{" "}
              <strong>game developer</strong> based in Chicago, IL.
            </p>
            <div className="socials">
              {/* INSERT GITHUB LINK */}
              <GitHubButton
                href="https://github.com/markanator"
                data-size="large"
                data-show-count="true"
                aria-label="Follow @markanator on GitHub"
              >
                Follow @markanator
              </GitHubButton>
            </div>
          </div>

          {/* rightside */}
          <div className="warno">
            <img
              src={Avatar}
              className="hero-avatar"
              alt="Mark"
            />
            <div>
              <h3> </h3>
              <p>I love to create and collaborate! Check out what I'm up to!</p>
              <Link tag="a" className="button" to="/portfolio">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
