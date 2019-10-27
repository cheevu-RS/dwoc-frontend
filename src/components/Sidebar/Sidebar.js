// React with hooks
import React from 'react';

// Smooth scroll
import { Link } from 'react-scroll';

import {
  Drawer,
  List,
  Divider,
  ListItemText,
  makeStyles,
  Button,
  ListItem
} from '@material-ui/core/';

const drawerWidth = `100%`;

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    color: '#05386B'
  },
  drawerPaper: {
    width: drawerWidth,
    //backgroundColor: '#5CDB95',
    top: 55,
    height: 'auto',
    backgroundColor: '#282c34',
    //borderBottom: '2px solid #5CDB95',
    //'0px 2px 4px -4px rgba(0,0,0,0.2), 0px 4px 5px -5px rgba(0,0,0,0.14), 0px 1px 10px -10px rgba(0,0,0,0.12)'
    boxShadow:
      //'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
      '0px 2px 4px -4px rgba(0,0,0,0.2), 0px 4px 5px -5px rgba(0,0,0,0.14), 0px 1px 10px -10px rgba(0,0,0,0.12)'
  }
}));

export default function Sidebar({
  open,
  handleToggle,
  tabs,
  drawerWidth,
  defaultBtns
}) {
  const classes = useStyles();

  const handleClick = () => {
    handleToggle();
  };

  return (
    <Drawer
      className={classes.drawer}
      style={{ width: `${drawerWidth}px` }}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Divider />
      <List>
        {defaultBtns.map((defaultBtn, index) => (
          <ListItem key={index}>
            <Button >
              <Link onClick={handleClick} smooth={true} to={defaultBtn.to}>
                <ListItemText
                  style={{ color: 'white' }}
                  primary={defaultBtn.name}
                />
              </Link>
            </Button>
          </ListItem>
        ))}
        <ListItem>
          {
            <Button onClick={handleToggle} href={tabs.link}>
              <ListItemText style={{ color: 'white' }} primary={tabs.name} />
            </Button>
          }
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
