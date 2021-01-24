import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import './Footer.css';

export const Footer = () => {
    return (
      <>
        <div className="footer">
          <FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} />.
        </div>
      </>
    );
};