import React, { useState } from 'react';
import { NavItem } from './NavItem/NavItem';
import { Divide as Hamburger } from "hamburger-react";

import './Nav.scss';
import { Socials } from '../../Socials/Socials';

export const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <div className="nav">
        <nav className="nav-mobile">
          <Hamburger toggled={menuOpened} toggle={setMenuOpened} label="Show menu" duration={0.8} className="hamburger" />
          {menuOpened && (
            <ul className="nav-items">
              <>
                <NavItem
                  id="hero"
                  text="Home"
                  onSelect={handleSelectItem}
                />
                <NavItem
                  id="profile"
                  text="Profile"
                  onSelect={handleSelectItem}
                />
                <NavItem
                  id="skills"
                  text="Skills"
                  onSelect={handleSelectItem}
                />
                {/* <NavItem
                  id="projects"
                  text="Projects"
                  onSelect={handleSelectItem}
                /> */}
                <NavItem
                  id="contact"
                  text="Contact"
                  onSelect={handleSelectItem}
                />
                {/* <NavItem
                  id="/resume"
                  text="Curriculum vitae"
                  onSelect={handleSelectItem}
                /> */}
                <Socials className="socials-mobile" />
              </>
            </ul>
          )}
        </nav>

        <nav className="nav-desktop">
          <ul className="nav-items">
            <>
              <NavItem
                id="hero"
                text="Home"
                onSelect={handleSelectItem}
              />
              <NavItem
                id="profile"
                text="Profile"
                onSelect={handleSelectItem}
              />
              <NavItem
                id="skills"
                text="Skills"
                onSelect={handleSelectItem}
              />
              {/* <NavItem
                id="projects"
                text="Projects"
                onSelect={handleSelectItem}
              /> */}
              <NavItem
                id="contact"
                text="Contact"
                onSelect={handleSelectItem}
              />
              {/* <NavItem
                id="/resume"
                text="Curriculum vitae"
                onSelect={handleSelectItem}
              /> */}
            </>
          </ul>
        </nav>
      </div>
    </>
  );
};