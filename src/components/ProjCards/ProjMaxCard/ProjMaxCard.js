/* @flow */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        <b>{props.btnText}</b>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
      >
        <DialogTitle id="dialog-title">
          Project Title
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Longer description of project over here
          </DialogContentText>
          <a href="https://www.github.com">Checkout the project on github</a>
        </DialogContent>
        <DialogActions>
          {props.taken === "1" ? (<Button onClick={handleClose}>Cancel</Button>) : (<div><Button onClick={handleClose}>Cancel</Button><Button onClick={handleClose}>Apply</Button></div>)}
        </DialogActions>
      </Dialog>
    </div>
  );
}