import React from 'react';
import { CV } from '../../components/CV/CV';
import { Navbar } from '../../components/Navbar/Navbar';

// import './Resume.css';

export const Resume = () => {
  return (
    <>
      <div className="resume">
        <Navbar />
        <CV />
      </div>
    </>
  );
};