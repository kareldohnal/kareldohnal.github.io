import React from 'react';
import { Socials } from '../Socials/Socials';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';

import './Navbar.scss';

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Logo />
          <Nav />
          <Socials />
        </div>
      </div>
    </>
  );
};