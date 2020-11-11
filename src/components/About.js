import React from 'react'
import { exp, edu } from '../Data/AboutData'
import CardListItem from './CardListItem'

export default function About() {
  return (
    <article className="about__wrapper">
      <header>
        <h1>About me</h1>
      </header>
      <div className="page">
        <div className="about__me">
          <div className="about__image">
            <img src="/aboutMe.jpg" alt="Mark Ambro" id="mark" />
          </div>
          <div className="about__text">
            <h3>Mark Ambrocio</h3>
            <p style={{ lineHeight: '1.5rem', letterSpacing: '0.025rem' }}>
              I am a full stack web developer and hobbyist game developer. I am
              a team oriented web developer leveraging HTML, CSS and JavaScript
              to build responsive websites and interactive features that drive
              business growth and improve UX. I am focused on building front
              ends for businesses of all sizes.
              <br /> Bilingual: English and Spanish.
            </p>
            <form
              action="https://www.linkedin.com/in/mark-ambrocio/"
              target="_blank"
            >
              <button type="submit">View Resume</button>
            </form>
          </div>
        </div>

        <h4>Mark at a glance:</h4>
        <ul id="glance">
          <li>
            <span role="img" aria-label="list item">
              💻
            </span>{' '}
            Graduating from Lambda School Code BootCamp, early 2021,
          </li>
          <li>
            <span role="img" aria-label="list item">
              🏫
            </span>{' '}
            Studying Application Programming at Columbia College Chicago,
          </li>
          <li>
            <span role="img" aria-label="list item">
              🎮
            </span>{' '}
            Passion for creating interactive media,
          </li>
          <li>
            <span role="img" aria-label="list item">
              🎖️
            </span>{' '}
            Honorably served in the US Army for 8 years,
          </li>
          <li>
            <span role="img" aria-label="list item">
              🌯
            </span>{' '}
            Native Spanish speaker,
          </li>
          <li>
            <span role="img" aria-label="list item">
              🧃
            </span>{' '}
            Apple Juice &gt; Coffee
          </li>
        </ul>

        {/* Experience and Education */}
        <div className="exp__edu">
          <div className="left">
            <h4>My Experience</h4>
            <div className="card">
              <ul>
                {exp.map(job => (
                  <CardListItem key={job.id} data={job} />
                ))}
              </ul>
            </div>
          </div>
          <div className="right">
            <h4>My Education</h4>
            <div className="card">
              <ul>
                {edu.map(uni => (
                  <CardListItem key={uni.id} data={uni} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
