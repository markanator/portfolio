import React from 'react'
import 'normalize.css'
// local
import SEO from '../components/SEO'
import HomeHero from '../components/HomeHero'
import About from '../components/About'
import HomeProjects from '../components/HomeProjects'
import HomeSkills from '../components/HomeSkills'
import ContactHome from '../components/ContactHome'
import Layout from '../components/Layout'

export default function index({ location }) {
  // console.log(location)
  return (
    <Layout location={location}>
      <main id="home">
        <SEO title="Home" />
        <HomeHero />
        <div className="wave wave1" id="about" />
        {/* ABOUT */}
        <section className="home__about">
          <div className="container">
            <About />
          </div>
        </section>

        <div className="wave wave2" id="skills" />
        {/* SKILLS */}
        <section className="home__skills">
          <div className="container">
            <HomeSkills />
          </div>
        </section>

        <div className="wave wave3" id="projects" />
        {/* projects */}
        <HomeProjects location={location} />

        <div className="wave wave4" id="contact" />
        {/* contact */}
        <ContactHome />
      </main>
    </Layout>
  )
}
