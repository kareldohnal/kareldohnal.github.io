import React, {useState} from 'react';
import { NavItem } from './NavItem/NavItem';

import './Nav.css';

export const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <div className="nav">
        <nav className="nav-desktop">
          <ul className="nav-items">
              <>
                <NavItem
                  id="/"
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
                <NavItem
                  id="projects"
                  text="Projects"
                  onSelect={handleSelectItem}
                />
                <NavItem
                  id="contact"
                  text="Contact"
                  onSelect={handleSelectItem}
                />
                <NavItem
                  id="/resume"
                  text="Curriculum vitae"
                  onSelect={handleSelectItem}
                />
              </>
          </ul>
        </nav>
      </div>
    </>
  );
};