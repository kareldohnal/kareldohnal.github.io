import React from 'react';

import './NavItem.css';

export const NavItem = (props) => {
  return (
    <li className="navitem">
      <a
        href={`#${props.id}`}
        className="navlink"
        onClick={() => props.onSelect()}
      >
        {props.text}
      </a>
    </li>
  );
};