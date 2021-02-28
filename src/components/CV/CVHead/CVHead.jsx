import React from 'react';
import { ProfilePic } from '../../ProfilePic/ProfilePic';

import './CVHead.css';

export const CVHead = () => {
  return (
    <>
      <div className="cvhead">
        <ProfilePic label="black" />        
      </div>
    </>
  );
};