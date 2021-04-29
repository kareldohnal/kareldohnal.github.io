import React from 'react';
import Skillsjson from "../../../data/skills.json";
import { CVExperience } from '../CVExperience/CVExperience';

import './CVOnePage.scss';

export const CVOnePage = () => {
  function level(num) {
    /* 
    0-3 Novice
    4-6 Intermediate
    7-9 Advanced
    10 Expert
    */
    if (num === 10) {
      return "expert"
    } else if (7 <= num && num <= 9) {
      return "advanced"
    } else if (4 <= num && num <= 6) {
      return "intermediate"
    } else if (num <= 3) {
      return "novice"
    }
  }

  return (
    <>
      <div className="onepage">
        <div className="container">
          <h1>One-pager</h1>
          <div className="sidepanel">
            <div className="statement">
              <h4 className="solverlabel">I'm a problem solver</h4>
              <p className="solvertext">
                Years of Analytical, Business Operation and Strategy Planning experience in combination with aspirations towards Software Engineering give me unique set of skills useful in any kind of problem solving process.
              </p>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              {Object.keys(Skillsjson).map((value) => {
                return (
                  <div key={value} className="category">
                    <h6>{Skillsjson[value].category}</h6>
                    <ul key={value}>
                      {Object.keys(Skillsjson[value].skills).map((item) => {
                        return <li key={item} className="skill-item">
                          {item} ({level(Skillsjson[value].skills[item])})
                        </li>
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="languages">
              <h2>Languages</h2>
              <ul>
                <li>Czech (native)</li>
                <li>English (C1)</li>
                <li>German (A1)</li>
              </ul>
            </div>
            <div className="hobbies">
              <h2>Hobbies</h2>
              <ul>
                <li>Hiking</li>
                <li>Coding</li>
                <li>Reading</li>
                <li>Creative writing</li>
                <li>3d printing</li>
              </ul>
            </div>
          </div>
          <div className="mainpanel">
            <CVExperience mode="module" version="short" />
          </div>
        </div>
      </div>
    </>
  );
};