import React from 'react';
import { ProfilePic } from '../ProfilePic/ProfilePic';

import './Hero.css';

export const Hero = () => {
    return (
      <>
        <section className="hero">
          <ProfilePic />
        </section>
      </>
    );
};