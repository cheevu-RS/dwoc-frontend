// React with hooks
import React, { useState, useEffect } from "react";

// Navbar imports from material UI
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  ListItemText
} from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import MenuIcon from "@material-ui/icons/Menu";

// Smooth scroll
import { Link, animateScroll as scroll } from "react-scroll";

// DWOC logo import inside navbar
import dwocLogo from "../../assets/images/dwoc_logo_white.png";

const minWidth = 550;

const useStyles = makeStyles(theme => ({
  title: { ...theme.typography.h6 },
  button: {
    marginLeft: `auto`,
    paddingTop: "11px",
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  githubBtn: {
    fontSize: `2.5em`,
    marginLeft: 16
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    justifyContent: "flex-end",
    ...theme.mixins.toolbar
  },
  navbar: {
    backgroundImage: "linear-gradient(to right, #000f29, #5CDB95)",
    color: "#05386B"
  }
}));

export default function Navbar(props) {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  window.onresize = evt => {
    const innerWidth = window.innerWidth;
    if (innerWidth < minWidth || (innerWidth > minWidth && width < minWidth))
      setWidth(innerWidth);
  };

  let defaultBtns = [
    { name: "Timeline", to: "timeline" },
    { name: "Organizations", to: "orgs" },
  ];

  let [tabs, setTabs] = useState(
    { name: "Login with Github", link: "https://delta.nitt.edu/dwocb/login" }
  );

  console.log(props);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("toggle");
    console.log(props.isLogged, "isLogged");

    if (props.isLogged) {
      setTabs(  
        { name: "Logout", link: "https://delta.nitt.edu/dwocb/logout" }
      );
    } else {
      setTabs(
        { name: "Login with Github", link: "https://delta.nitt.edu/dwocb/login" }
      );
    }
  }, [props.isLogged]);

  const handleToggle = evt => {
    setOpen(prevState => !prevState);
    open ? setDrawerWidth(0) : setDrawerWidth(200);
  };
  const handleClick = (evt, tabName) => {
    console.log(tabName);
  };

  // TODO make it look good on mobile devices
  let deltaLogo = (
    <div
      style={{
        padding: "5px 15px",
        margin: 0
      }}
    >
      <a href="https://delta.nitt.edu/">
        <img alt="delta-logo" width="222px" src={dwocLogo} />
      </a>
    </div>
  );

  let navbarElems = (
    <div>
      {width < minWidth && (
        <Toolbar style={{ color: "#5CDB95" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <div className={styles.drawerHeader}>
              <Sidebar 
                open={open} 
                drawerWidth={drawerWidth}
                defaultBtns={defaultBtns}
                tabs={tabs}
                handleToggle={handleToggle}
               />
              <MenuIcon onClick={handleToggle} />
            </div>
            {deltaLogo}
          </div>
        </Toolbar>
      )}

      {width > minWidth && (
        <Toolbar>
          {deltaLogo}
          <div className={styles.button} style={{marginBottom: '6px'}}>
            {defaultBtns.map((tab, index) => (
              <Button className={styles.button} key={index}>
                <Link smooth={true} to={tab.to}>
                  <ListItemText primary={tab.name}/>
                </Link>
              </Button>
            ))}
            {(
              <Button className={styles.button} href={tabs.link}>
                <ListItemText primary={tabs.name}/>
              </Button>
            )}
          </div>
        </Toolbar>
      )}
    </div>
  );



  return (
    <div>
      <AppBar position="fixed" className={styles.navbar}>
        {navbarElems}
      </AppBar>
      <div style={{ height: "80px" }}></div>
    </div>
  );
}
