import React from 'react';
import {Contact} from '../../components/Contact/Contact';
import {Footer} from '../../components/Footer/Footer';
import {Hero} from '../../components/Hero/Hero';
import {Navbar} from '../../components/Navbar/Navbar';
import {Profile} from '../../components/Profile/Profile';
import { Projects } from '../../components/Projects/Projects';
import {Skills} from '../../components/Skills/Skills';

// import './Landing.css';

export const Landing = () => {
  return (
    <>
      <div className="landing">
        <Navbar/>
        <Hero/>
        <Profile/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};
