import React, { useState } from 'react';
import { Button } from '../../Button/Button';
import Skillsjson from "../../../data/skills.json";

import './SkillsGraph.css';

export const SkillsGraph = () => {
  const [select, setSelect] = useState(Object.keys(Skillsjson)[0])

  return (
    <>
      <div className="skillsgraph">
        <div className="skill-switch">
          {Object.keys(Skillsjson).map((value) => {
            return <Button key={value} className={`toggle ${select === value ? "active" : ""}`} textBtn={Skillsjson[value].category} id={value} onClick={() => setSelect(value)} />
          })}
        </div>
        <div className="skill-list">
          {Object.keys(Skillsjson).map((value) => {
            return <ul key={value} className={`fade ${select === value ? "active" : ""}`}>
              {Object.keys(Skillsjson[value].skills).map((item) => {
                return <li key={item} className="skill-item">
                  <div className="skill-name">{item}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: Skillsjson[value].skills[item] + '0%' }}>
                      <div className="skill-label">{Skillsjson[value].skills[item]}/10</div>
                    </div>
                  </div>
                </li>
              })}
            </ul>
          })}
        </div>
      </div>
    </>
  );
};