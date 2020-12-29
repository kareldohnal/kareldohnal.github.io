import React from 'react';
import profilepic from "./img/profilepic.jpg"

import './ProfilePic.css';

export const ProfilePic = () => {
  return (
    <>
      <img className="profilepic" src={profilepic} alt="Profile picture" />
    </>
  );
};