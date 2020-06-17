import React from "react";

// data
import { sprintListdata } from "../../Data/sprintListData";
import { BWData } from "../../Data/buildWeekListData";
// components
import ProjectListItem from "../../components/ProjectListItem";
// styles
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="container">
      <article className="portfolio-wrapper">
        <header>
          {/* Page Header */}
          <h1>Portfolio</h1>
        </header>
        <div className="page">
          <p>A collection of my previous work.</p>
          <section class="section">
            {/* <h2> </h2> */}
            <section class="projects">
              {/* map BuildWeek data */}
              {BWData.map(proj => {
                return <ProjectListItem data={proj} />;
              })}
            </section>
          </section>

          <section class="section">
            <h2>Lambda Sprints:</h2>
            <section class="projects">
              {/* map Sprint data */}
              {sprintListdata.map(proj => {
                return <ProjectListItem data={proj} />;
              })}
            </section>
          </section>
        </div>
      </article>
    </div>
  );
}
