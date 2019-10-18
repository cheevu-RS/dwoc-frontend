// React with hooks
import React from "react";

// Smooth scroll
import { Link, animateScroll as scroll } from "react-scroll";

import {
  Drawer,
  List,
  Divider,
  ListItemText,
  makeStyles,
  Button,
  ListItem
} from "@material-ui/core/";

const drawerWidth = `100%`;

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    color: "#05386B",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#5CDB95",
    top: 75,
    height: 200,
    backgroundImage: `linear-gradient(to right, #000f29, #5CDB95)`
  }
}));

export default function Sidebar({ open, handleToggle, tabs, drawerWidth, defaultBtns }) {
  const classes = useStyles();

  const handleClick = () => {
    handleToggle();
  }

  return (
    <Drawer
      className={classes.drawer}
      style={{ width: `${drawerWidth}px` }}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Divider />
      <List>
        {defaultBtns.map((defaultBtn, index) => (
          <ListItem>
            <Button 
              key={index} 
            >
              <Link onClick={handleClick} smooth={true} to={defaultBtn.to}>
                <ListItemText style={{color: 'white'}} primary={defaultBtn.name} />
              </Link>
            </Button>
          </ListItem>
        ))}
        <ListItem>
          {(<Button onClick={handleToggle} href={tabs.link}><ListItemText style={{color: 'white'}} primary={tabs.name} /></Button>)}
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
