import React from 'react';
import projectsJSON from "../../data/projects.json";

import './Projects.css';

const requestImage = require.context('../../data/projectsimg', true, /png$/);

export const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <div className="projects-head">
        <h4>Projects</h4>
        <p>Click on the thumbnails below for details.</p>
        </div>
        <div className="projects-gal">
          {Object.keys(projectsJSON).map((value) => {
            return (
              <div className="projects-gal-item">
                <img key={value} src={requestImage(`./${value}.png`).default} alt={projectsJSON[value].name} />
                <div className="projects-gal-item-name">{projectsJSON[value].name}</div>
                <div className="projects-gal-item-pitch">{projectsJSON[value].pitch}</div>
              </div>
              )
          })}
        </div>
      </div>
    </>
  );
};