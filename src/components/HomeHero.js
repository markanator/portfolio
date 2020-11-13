import React from 'react'
import { Link } from 'gatsby'
import GitHubButton from 'react-github-btn'

export default function HomeHero() {
  return (
    <section className="hero-main">
      <div className="container">
        <div className="hero">
          {/* LeftSide */}
          <div className="opord animate__animated animate__fadeInUp">
            <h1>Hi, I'm Mark</h1>
            <p>
              I'm a <strong>full stack software developer</strong> and{' '}
              <strong>game developer</strong> based in Chicago, IL.
            </p>
            <div className="socials">
              {/* INSERT GITHUB LINK */}
              <GitHubButton
                href="https://github.com/markanator"
                data-size="large"
                data-show-count="true"
                aria-label="Follow @markanator on GitHub"
                height="28"
                width="188"
              >
                Follow @markanator
              </GitHubButton>
            </div>
          </div>

          {/* rightside */}
          <div className="warno animate__animated animate__fadeInUp">
            <img src="/avatar.jpg" className="hero-avatar" alt="Mark" />
            <div>
              <p>I love to create and collaborate! Check out what I'm up to!</p>
              <a tag="a" className="button" href="#projects">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
