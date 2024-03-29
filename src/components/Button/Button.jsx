import React from 'react';
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Button.scss';

export const Button = (props) => {
  const className = typeof props.className !== 'undefined' ? props.className : 'primarybtn';

  const typeBtn = typeof props.type !== 'undefined' ? props.type : 'button';

  const onClick = typeof props.onClick !== 'undefined' ? props.onClick : () => { };

  const id = typeof props.id !== 'undefined' ? props.id : props.textBtn.replace(/\s/g,'').toLowerCase();

  return (
    <>
      {!props.faApendix && (
        <button
          className={`button ${className}`}
          id={id}
          onClick={() => onClick()}
          type={typeBtn}
        >
          {props.textBtn}
        </button>
      )}

      {/* Buttons with PDF file format Font Awesome apendix */}
      {props.faApendix === "pdf" && (
        <button
          className={`button ${className}`}
          id={id}
          onClick={() => onClick()}
          type={typeBtn}
        >
          {props.textBtn}
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faFilePdf} />
        </button>
      )}
      {/* Buttons with Linkedin Font Awesome apendix */}
      {props.faApendix === "linkedin" && (
        <button
          className={`button ${className}`}
          id={id}
          onClick={() => onClick()}
          type={typeBtn}
        >
          {props.textBtn}
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
      )}
    </>
  );
};
