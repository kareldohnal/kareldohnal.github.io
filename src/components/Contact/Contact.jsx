import React from 'react';
import Link from '@material-ui/core/Link';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import './Contact.css';

export const Contact = () => {
    return (
      <>
        <section className="contact" id="contact">
        <div className="contact-head">
          <h4>Contact</h4>
          <p>Feel free to contact me via email listed below.</p>
        </div>
        <div className="contact-item">
          <Link href="mailto:karel.dohnal@gmail.com" color="inherit">
          <MailOutlineIcon fontSize="large" />
          <p>karel.dohnal@gmail.com</p>
          </Link>
        </div>
        </section>
      </>
    );
};