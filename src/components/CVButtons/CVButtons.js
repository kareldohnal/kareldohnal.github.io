import React from 'react';
import { useHistory } from "react-router-dom"
import { Button } from '../Button/Button';


// import './CVButtons.css';

export const CVButtons = () => {
  const { push } = useHistory();
  return (
    <>
      <div className="cvbuttons">
        <Button
          onClick={() => push('/resume')}
          textBtn="Open CV"
        />
        <Button
          onClick={() => push('/resume')}
          textBtn={"Download CV"}
          faApendix="pdf"
        />
      </div>
    </>
  );
};