import React from 'react';
import Skillsjson from "../../../data/skills.json";

import './CVOnePage.scss';

export const CVOnePage = () => {
  return (
    <>
      <div className="onepage">
        <div className="container">
          <h1>One-pager</h1>
          <div className="sidepanel">
            <div className="statement">
              <h6 className="solverlabel">I'm a problem solver</h6>
              <p className="solvertext">
                Years of Analytical, Business Operation and Strategy Planning experience in combination with aspirations towards Software Engineering give me unique set of skills useful in any kind of problem solving process.
              </p>
            </div>
            <div className="skills">
              {Object.keys(Skillsjson).map((value) => {
                return (
                  <div key={value} className="category">
                    <h6>{Skillsjson[value].category}</h6>
                    <ul key={value}>
                      {Object.keys(Skillsjson[value].skills).map((item) => {
                        return <li key={item} className="skill-item">
                          <div className="skill-name">{item}</div>
                          <div className="skill-level">{Skillsjson[value].skills[item]}/10</div>
                        </li>
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mainpanel">

          </div>
        </div>
      </div>
    </>
  );
};