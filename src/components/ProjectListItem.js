import React from 'react'
import GitHubButton from 'react-github-btn'

export default function ProjectListItem({ data }) {
  return (
    <div className="each">
      <h2>
        <a
          className="project-link"
          href={data.Url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-icon">{data.Icon}</div>
          <div className="project-title">{data.Title}</div>
        </a>
      </h2>
      {/* Project Description */}
      <p>{data.Desc}</p>
      <div className="buttons">
        {/* GITHUB */}
        <span>
          {data.showGit ? (
            <span>
              <GitHubButton
                href={data.gitUrl}
                data-size="large"
                data-show-count="true"
                aria-label="mark's github source"
              >
                Source
              </GitHubButton>
            </span>
          ) : null}
        </span>
        {/* Show Link */}
        {data.showLink ? (
          <a
            className="button"
            href={data.Url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        ) : null}

        {/* show Hosted */}
        {data.isHosted ? (
          <a
            className="button"
            href={data.hostedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        ) : null}
      </div>
    </div>
  )
}
