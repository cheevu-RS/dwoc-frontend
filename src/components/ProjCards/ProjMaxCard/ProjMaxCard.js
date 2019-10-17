/* @flow */

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">{props.projName}</DialogTitle>
        <DialogContent>
          <DialogContentText>Description: {props.projDesc}</DialogContentText>
          <a href={"https://" + props.githubUrl}>
            Checkout the project on github{" "}
          </a>
        </DialogContent>
        {props.isLogged && (
          <div>
            <DialogActions>
              {props.taken === "1" ? (
                <Button onClick={handleClose}>Cancel</Button>
              ) : (
                <div>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Apply</Button>
                </div>
              )}
            </DialogActions>
          </div>
        )}
        {props.isLogged || (
          <div>
            <DialogActions>
              {props.taken === "1" ? (
                <Button onClick={handleClose}>Cancel</Button>
              ) : (
                <div>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Login to apply</Button>
                </div>
              )}
            </DialogActions>
          </div>
        )}
      </Dialog>
    </div>
  );
}
