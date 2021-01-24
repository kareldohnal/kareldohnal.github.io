import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './SocItem.css';

export const SocItem = (props) => {
  return (
    <li className="socitem">
      <a
        href={`${props.url}`}
        target="blank"
        className="soclink"
      >
        <FontAwesomeIcon icon={props.icon} />
      </a>
    </li>
  );
};