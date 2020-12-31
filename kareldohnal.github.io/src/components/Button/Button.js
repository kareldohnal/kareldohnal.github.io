import React from 'react';
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Button.css';

export const Button = (props) => {
  const className = typeof props.className !== 'undefined' ? props.className : 'primarybtn';

  const typeBtn = typeof props.type !== 'undefined' ? props.type : 'button';

  const onClick = typeof props.onClick !== 'undefined' ? props.onClick : () => { };

  return (
    <>
      {!props.faApendix && (
        <button
          className={`button ${className}`}
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
          onClick={() => onClick()}
          type={typeBtn}
        >
          {props.textBtn}
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faFilePdf} />
        </button>
      )}
    </>
  );
};