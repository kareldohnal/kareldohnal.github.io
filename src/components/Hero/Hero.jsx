import React from 'react';
import { ProfilePic } from '../ProfilePic/ProfilePic';
import scroll from "./img/scroll.gif";

import './Hero.css';

export const Hero = () => {
    return (
      <>
        <section className="hero">
          <ProfilePic label="white" />
          <a href="#profile">
            <img src={scroll} className="scroll" alt="scroll down" />
          </a>
        </section>
      </>
    );
};