import React from 'react';
import profilepic from "./img/profilepic.png"

import './ProfilePic.css';

export const ProfilePic = (props) => {

  return (
    <>
      <img className="profilepic" src={profilepic} alt="Profile" />
      {props.label && (
        <>
        <h1 className="profilepiclabel" style={{color: props.label}}>Karel Dohnal</h1>
        </>
      )}
    </>
  );
};