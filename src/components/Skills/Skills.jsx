import React from 'react';
import { SkillsGraph } from './SkillsGraph/SkillsGraph';

import './Skills.css';

export const Skills = () => {
    return (
      <>
        <section className="skills" id="skills">
          <div className="skillsimg"></div>
          <div className="skillspanel">
            <div className="skillspanellabel">
              <h4>My Skills</h4>
              <p>Below you can see languages, frameworks, libraries and software with which I have hands-on experience and rating how comfortable I feel using them.</p>
            </div>
            <SkillsGraph />
          </div>
        </section>
      </>
    );
};