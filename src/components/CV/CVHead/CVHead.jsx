import React from 'react';
import { ProfilePic } from '../../ProfilePic/ProfilePic';
import RoomIcon from '@material-ui/icons/Room';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import './CVHead.scss';

export const CVHead = () => {
  return (
    <>
      <div className="cvhead">
        <ProfilePic label="black" />
        <div className="cv-contact">
        <ul className="cv-contact-list">
          <li><RoomIcon className="icon" />Prague, Czech republic</li>
          <li><MailOutlineIcon className="icon" /> karel.dohnal@gmail.com</li>
        </ul>
        </div>
      </div>
    </>
  );
};