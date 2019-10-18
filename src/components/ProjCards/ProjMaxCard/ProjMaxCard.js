/* @flow */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
          <a href={'https://' + props.githubUrl}>
            Checkout the project on GitHub{' '}
          </a>
        </DialogContent>
        {props.isLogged && (
          <div>
            <DialogActions>
              {props.taken === '1' ? (
                <Button onClick={handleClose}>Cancel</Button>
              ) : (
                <div>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button>
                    {' '}
                    <Link
                      to={{
                        pathname: '/apply',
                        props: {
                          title: props.projName,
                          description: props.projDesc,
                          tags: props.tools,
                          mentors: [],
                          org_name: props.orgName
                        }
                      }}
                    >
                      Apply
                    </Link>
                  </Button>
                </div>
              )}
            </DialogActions>
          </div>
        )}
        {props.isLogged || (
          <div>
            <DialogActions>
              {props.taken === '1' ? (
                <Button onClick={handleClose}>Cancel</Button>
              ) : (
                <div>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button>
                    {' '}
                    <a href="https://delta.nitt.edu/dwocb/login">
                      Login to apply
                    </a>
                  </Button>
                </div>
              )}
            </DialogActions>
          </div>
        )}
      </Dialog>
    </div>
  );
}
