/* eslint-disable react/prop-types */
import { Link } from 'gatsby'
import React from 'react'
import { FaHardHat } from 'react-icons/fa'
// locals
import { useDarkMode } from '../hooks/DarkModeContext'
import { showcaseList } from '../Data/showcase'
import IconsProducer from './IconsProducer'

export default function HomeProjects({ location }) {
  const { origin } = location
  const { lights } = useDarkMode()
  return (
    <section className="home__projects">
      <div className="showcase__section">
        <div className="container">
          <h3>Projects:</h3>
          <h4 className="subtitle">A short list of noteworthy projects:</h4>

          <div className="home__showcase">
            {showcaseList.map(proj => (
              <ProjectContainer
                key={proj.id}
                data={proj}
                lights={lights}
                origin={origin}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectContainer({ data, lights, origin }) {
  return (
    <div className="project__container">
      <div className="image__container">
        <img src={data.image} alt={data.title} />
        {data.remodel && (
          <div className="construction">
            <FaHardHat title="Site being remodeled." />{' '}
          </div>
        )}
      </div>
      <div className="text__container">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <div className="icons__container">
          <div className="tool__icon">
            {data.tags.map(tag => (
              <IconsProducer key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="button__container">
          <a
            className="href__button"
            title={`${data.title}, hosted link`}
            href={data.hostedLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          {data.gitLink ? (
            <a
              className="href__button"
              title={`${data.title}, github link`}
              href={data.gitLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          ) : (
            <button type="button" disabled className="href__button muted">
              Github
            </button>
          )}
          {data.blogLink && (
            <Link
              to={`/${data.blogLink}`}
              state={{ lights }}
              className="href__button"
              title={`${data.title}, case study`}
            >
              Case Study
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
