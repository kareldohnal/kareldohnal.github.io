import React from 'react';
import { ProfilePic } from '../ProfilePic/ProfilePic';
import scroll from "./img/scroll.gif";

import './Hero.scss';

export const Hero = () => {
    return (
      <>
        <section className="hero" id="hero">
          <ProfilePic label="white" />
          <a href="#profile">
            <img src={scroll} className="scroll" alt="scroll down" />
          </a>
        </section>
      </>
    );
};