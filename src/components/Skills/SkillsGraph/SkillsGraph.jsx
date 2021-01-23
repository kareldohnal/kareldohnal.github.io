import React, { useState } from 'react';
import { Button } from '../../Button/Button';
import Skillsjson from "../SkillsData.json";

// import './SkillsGraph.css';

export const SkillsGraph = () => {
  const [select, setSelect] = useState(Object.keys(Skillsjson)[0])
  console.log(select)

  return (
    <>
      <div className="skillsgraph">
        <div className="skill-switch">
          {Object.keys(Skillsjson).map((value, index) => {
            return <Button key={value} className={`toggle ${select === value ? "active" : ""}`} textBtn={Skillsjson[value].category} id={value} onClick={() => setSelect(value)} />
          })}
        </div>
        <div className="skill-list">
          SkillList
          </div>
      </div>
    </>
  );
};