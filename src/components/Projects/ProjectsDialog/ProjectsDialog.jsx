import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import projectsJSON from "../../../data/projects.json";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Link from '@material-ui/core/Link';

import './ProjectsDialog.css';

const requestImage = require.context('../../../data/projectsimg', true, /png$/);

export const ProjectsDialog = (props) => {
  const { onClose, open, selected } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} scroll="paper">
        <DialogTitle id="dialog-title">
          <div className="name">{projectsJSON[selected].name}</div>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <div className="details">
          <img src={requestImage(`./${selected}.png`).default} alt={projectsJSON[selected].name} />
          <div className="pitch">{projectsJSON[selected].pitch}</div>
          <div className="web"><Link href={(`//${projectsJSON[selected].web}`)} target="blank" rel="noopener">{projectsJSON[selected].web} <OpenInNewIcon style={{ fontSize: 12 }} /></Link></div>
          <div className="desc">{projectsJSON[selected].desc}</div>
        </div>
      </Dialog>
    </>
  );
};