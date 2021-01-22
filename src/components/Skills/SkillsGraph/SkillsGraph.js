import React from 'react';
import { Button } from '../../Button/Button';
import Skillsjson from "../Skills.json";

// import './SkillsGraph.css';

export const SkillsGraph = () => {
    return (
      <>
        <div className="skillsgraph">
          <div className="skill-switch">
            {Object.keys(Skillsjson).map((value, index) => {
              return <Button textBtn={Skillsjson[value].category} onClick={this} />
            })}
          </div>
          <div className="skill-list">
            SkillList
          </div>
        </div>
      </>
    );
};