import React from 'react';
import Expjson from "../../../data/experience.json";

import './CVExperience.scss';

export const CVExperience = (props) => {
  // const mode = typeof props.mode !== 'undefined' ? props.mode : '';
  const version = typeof props.version !== 'undefined' ? props.version : 'short';

  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <ul>
        {Object.keys(Expjson).map((value) => {
          return (
            <li key={value} className="item">
              <div className="period">{Expjson[value].period}</div>
              <div className="details">
                <p className="role">{Expjson[value].role}</p>
                <p className="company">{Expjson[value].company}</p>
                <p className="desc">{Expjson[value].desc[version]}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};