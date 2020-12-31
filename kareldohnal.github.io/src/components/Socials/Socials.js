import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { SocItem } from './SocItem/SocItem';

import './Socials.css';

export const Socials = (props) => {
  const className = typeof props.className !== 'undefined' ? props.className : '';
  return (
    <>
      <div className={`socials ${className}`}>
        <ul className="socials-items">
          <>
            <SocItem
              url="https://www.linkedin.com/in/karel-dohnal"
              icon={faLinkedin}
            />
            <SocItem
              url="https://github.com/kareldohnal"
              icon={faGithub}
            />
          </>
        </ul>
      </div>
    </>
  );
};