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
  Button
} from "@material-ui/core/";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    color: "#05386B"
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#5CDB95"
  }
}));

export default function Sidebar({ open, handleToggle, tabs, drawerWidth, defaultBtns }) {
  const classes = useStyles();

  // console.log(defaultBtns)

  const handleClick = () => {
    // console.log("clicked")
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
        paper: classes.drawerPaper
      }}
    >
      <Divider />
      <List>
        {defaultBtns.map((defaultBtn, index) => (
          <Button 
            key={index} 
          >
            <Link onClick={handleClick} smooth={true} to={defaultBtn.to}>
              <ListItemText primary={defaultBtn.name} />
            </Link>
          </Button>
        ))}
        {(<Button onClick={handleToggle} href={tabs.link}><ListItemText primary={tabs.name}></ListItemText></Button>)}
      </List>
      <Divider />
    </Drawer>
  );
}
