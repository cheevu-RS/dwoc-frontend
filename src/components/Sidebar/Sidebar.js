// React with hooks
import React from "react";

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

export default function Sidebar({ open, handleToggle, setOpen, tabs, drawerWidth }) {
  const classes = useStyles();

  const handleClick = () => {
    console.log("clicked")
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
        {tabs.map((tab, index) => (
          <Button 
            key={index} 
            href={tab.link}
            onClick={handleClick}
          >
            <ListItemText primary={tab.name} />
          </Button>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
