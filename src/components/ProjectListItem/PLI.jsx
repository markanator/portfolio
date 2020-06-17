import React from "react";
import GitHubButton from "react-github-btn";

export default function PLI(props) {
  return (
    <div class="each">
      <h2>
        <a
          class="project-link"
          href={props.data.Url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="project-icon">{props.data.Icon}</div>
          <div class="project-title">{props.data.Title}</div>
        </a>
      </h2>
      {/* Project Description */}
      <p>{props.data.Desc}</p>
      <div class="buttons">
        {/* GITHUB */}
        <span>
          {props.data.showGit ? (
            <span>
              <GitHubButton
                href={props.data.gitUrl}
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
        {props.data.showLink ? (
          <a
            class="button"
            href={props.data.Url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        ) : null}

        {/* show Hosted */}
        {props.data.isHosted ? (
          <a
            class="button"
            href={props.data.hostedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        ) : null}
      </div>
    </div>
  );
}
