import React, { useState } from 'react';
import projectsJSON from "../../data/projects.json";

import './Projects.scss';
import { ProjectsDialog } from './ProjectsDialog/ProjectsDialog';

const requestImage = require.context('../../data/projectsimg', true, /png$/);

export const Projects = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(Object.keys(projectsJSON)[0]);

  const handleClickOpen = (value) => {
    setOpen(true);
    setSelect(value)
  };

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <section className="projects" id="projects">
        <div className="projects-head">
          <h4>Projects</h4>
          <p>Click on the thumbnails below for details.</p>
        </div>
        <div className="projects-gal">
          {Object.keys(projectsJSON).map((value) => {
            return (
              <div key={value} className="projects-gal-item">
                <img src={requestImage(`./${value}.png`).default} alt={projectsJSON[value].name} onClick={() => handleClickOpen(value)} />
                <div className="projects-gal-item-name">{projectsJSON[value].name}</div>
                <div className="projects-gal-item-pitch">{projectsJSON[value].pitch}</div>
              </div>
            )
          })}
          <ProjectsDialog open={open} onClose={handleClose} selected={select} />
        </div>
      </section>
    </>
  );
};