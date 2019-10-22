/* @flow */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const styles = makeStyles(theme => ({
  readMore: {
    borderRadius: `10px`,
    transition: `0.2s`,
    '&:before, &:after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: `100%`
      // transition: `0.4s`,
      //background: 'black'
    },
    '&:before': {
      borderRadius: `10px 0 0 10px`
    },
    '&:after': {
      borderRadius: `0 10px 10px 0`,
      left: 'auto',
      right: 0
    },
    '&:hover': {
      '&:after, &:before': {
        width: `50%`
      },
      '& .textClass': {
        //   color: `#5CDB95`,
        zIndex: 100
      }
    }
  }
}));

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const classes = styles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submitProposal = evt => {
    history.push(`/org/${props.organization.id}/${props.orgName}/apply`, props);
  };
  return (
    <div>
      <Button
        className={classes.readMore}
        onClick={handleClickOpen}
        variant="outlined"
      >
        <span className="textClass">{props.btnText}</span>
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
                  <Button onClick={submitProposal}> Apply</Button>
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
