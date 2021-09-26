import React from 'react';
import {Button} from '../Button/Button';

export const CVButtons = () => {
  return (
    <>
      <div className="cvbuttons">
        <Button
          onClick={() => window.open("https://www.linkedin.com/in/karel-dohnal/", "_blank")}
          textBtn={"Resumé available at "}
          faApendix="linkedin"
        />
      </div>
    </>
  );
};
