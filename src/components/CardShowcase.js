import React from 'react'
import { Link } from 'gatsby'

export default function CardShowcase({ project }) {
  return (
    <div className="card__showcase">
      <span className="hover__animate">
        <Link to="/">
          <img src={project.image} alt={project.title} />
          <h4>{project.title}</h4>
          <span className="small-text">{project.category}</span>
        </Link>
      </span>
    </div>
  )
}
