import Button from '@material-ui/core/Button';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  
  export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
<div>
<Button variant="outlined" color="secondary" onClick={handleClickOpen}>
  View more details
</Button>
<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
  <DialogTitle id="customized-dialog-title" onClose={handleClose}>
    Project Title
  </DialogTitle>
  <DialogContent dividers>
    <Typography gutterBottom>
      Long description about project to add bulk to the dialog box..........
    </Typography>
    <Typography gutterBottom>
      Long description about project to add bulk to the dialog box
    </Typography>
    <Typography gutterBottom>
      Long description about project to add bulk to the dialog box
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Apply
    </Button>
  </DialogActions>
</Dialog>
</div>
);
}
