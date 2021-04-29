import React from 'react';
import { CVExperience } from './CVExperience/CVExperience';
import { CVHead } from './CVHead/CVHead';
import { CVOnePage } from './CVOnePage/CVOnePage';

// import './CV.css';

export const CV = () => {
  return (
    <>
      <div className="cv">
        <CVHead />
        <CVOnePage />
        <CVExperience mode="standalone" version="full" />
      </div>
    </>
  );
};