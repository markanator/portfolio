import React from "react";
import GitHubButton from "react-github-btn";
import { Link } from "react-router-dom";

import "./mainContent.scss";

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
              src="https://media-exp1.licdn.com/dms/image/C5603AQEJ2LUMzrbZgw/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=VysMSpVgMom10S2bpjeFwRXXgPnEFB_BPHaFgp6e9uo"
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
