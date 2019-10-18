// React with hooks
import React, { useState, useEffect } from 'react';

// Navbar imports from material UI
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  ListItemText
} from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';
import MenuIcon from '@material-ui/icons/Menu';

// Smooth scroll
import { Link } from "react-scroll";

// DWOC logo import inside navbar
import nightDwoc from "../../assets/images/dwocfull-transparentW.png"
import dayDwoc from '../../assets/images/full-transparent.png'
import nightDelta from '../../assets/images/deltaLogoGreen.png'
import dayDelta from '../../assets/images/deltaLogoBlack.png'

const minWidth = 730;

const useStyles = makeStyles(theme => ({
  title: { ...theme.typography.h6 },
  nightButton: {
    marginLeft: `auto`,
    paddingTop: "11px",
    color: 'white !important' 
  },
  dayButton: {
    marginLeft: `auto`,
    paddingTop: "11px",
    color: '#282c34 !important'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  },
  nightNavbar: {
    backgroundColor: '#282c34',
    color: '#fff'
  },
  dayNavbar: {
    backgroundColor: 'white',
    color: '#282c34'
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

  let defaultBtns = [];
  
  if(props.showBtns) defaultBtns = [
    { name: "Timeline", to: "timeline" },
    { name: "Organizations", to: "orgs" },
  ];

  let [tabs, setTabs] = useState({
    name: 'Login with Github',
    link: 'https://delta.nitt.edu/dwocb/login'
  });

  console.log(props);

  useEffect(() => {
    // Update the document title using the browser API

    if (props.isLogged) {
      setTabs({ name: 'Logout', link: 'https://delta.nitt.edu/dwocb/logout' });
    } else {
      setTabs({
        name: 'Login with Github',
        link: 'https://delta.nitt.edu/dwocb/login'
      });
    }
  }, [props.isLogged]);

  const handleToggle = evt => {
    setOpen(prevState => !prevState);
    // open ? setDrawerWidth(0) : setDrawerWidth(200);
  };
  const handleClick = (evt, tabName) => {
    console.log(tabName);
  };

  // TODO make it look good on mobile devices
  let dayDeltaLogo = (
    <div
      style={{
        padding: "5px 15px",
        margin: 0
      }}
    >
      <a href="/">
        <img alt="dayDelta" src={dayDelta} width="45px"/>
      </a>
    </div>
  );

  let nightDeltaLogo = (
    <div
      style={{
        padding: '5px 15px',
        margin: 0
      }}
    >
      <a href="/">
        <img alt="nightDelta" src={nightDelta} width="45px"/>
      </a>
    </div>
  );

  let nightNavbar = (
    <div>
      {width < minWidth && (
        <Toolbar style={{ color: '#5CDB95' }}>
          <div
            style={{
              display: 'flex',
              // justifyContent: 'space-between',
              width: '100%'
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
            {nightDeltaLogo}
          </div>
        </Toolbar>
      )}

      {width > minWidth && (
        <Toolbar>
          {nightDeltaLogo}
          <div className={styles.nightButton} style={{marginBottom: '6px'}}>
            {defaultBtns.map((tab, index) => (
              <Button className={styles.nightButton} key={index}>
                <Link smooth={true} to={tab.to} style={{color: '#fff'}}>
                  <ListItemText primary={tab.name}/>
                </Link>
              </Button>
            ))}
            {(
              <Button className={styles.nightButton} href={tabs.link} >
                <ListItemText primary={tabs.name} style={{color: '#fff'}}/>
              </Button>
            )}
          </div>
        </Toolbar>
      )}
    </div>
  );

  let dayNavbar = (
    <div>
      {width < minWidth && (
        <Toolbar style={{ color: "black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: 'black'
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
            {dayDeltaLogo}
          </div>
        </Toolbar>
      )}

      {width > minWidth && (
        <Toolbar>
          {dayDeltaLogo}
          <div className={styles.dayButton} style={{marginBottom: '6px'}}>
            {defaultBtns.map((tab, index) => (
              <Button className={styles.dayButton} key={index}>
                <Link smooth={true} to={tab.to}>
                  <ListItemText primary={tab.name}/>
                </Link>
              </Button>
            ))}
            {(
              <Button className={styles.dayButton} href={tabs.link}>
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
        <AppBar position="fixed" className={styles.nightNavbar}><div>{nightNavbar}</div></AppBar>
    </div>
  );
}
