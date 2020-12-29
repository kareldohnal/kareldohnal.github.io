import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { SocItem } from './SocItem/SocItem';

import './Socials.css';

export const Socials = () => {
  return (
    <>
      <div className="socials">
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