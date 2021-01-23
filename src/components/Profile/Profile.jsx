import React from 'react';
import solver from "./img/solver.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'

import './Profile.css';
import { CVButtons } from '../CVButtons/CVButtons';

export const Profile = () => {
  
    return (
      <>
        <section className="profile" id="profile">
          <div className="solverimg"><img src={solver} alt="problem solver illustration" /></div>
          <div className="solver">
            <h4 className="solvername">Karel Dohnal</h4>
            <h6 className="solverlabel">I'm problem solver</h6>
            <p className="solvertext">
              Years of Analytical, Business Operation and Strategy Planning experience in combination with aspirations towards Software Engineering give me unique set of skills useful in any kind of problem solving process.
            </p>
            <ul className="solvercontact">
              <li><FontAwesomeIcon icon={faEnvelope} /> karel.dohnal@gmail.com</li>
              <li>&nbsp;<FontAwesomeIcon icon={faMapMarkerAlt} /> Prague, Czech republic</li>
            </ul>
            <CVButtons />
          </div>
        </section>
      </>
    );
};