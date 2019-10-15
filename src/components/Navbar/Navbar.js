// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  ListItemText
} from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import dwocLogo from '../../assets/images/dwoc_logo_white.png';
const minWidth = 550;
const useStyles = makeStyles(theme => ({
  title: { ...theme.typography.h6 },
  button: {
    marginLeft: `auto`
  },

  githubBtn: {
    fontSize: `3em`,
    marginLeft: 16
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  },
  navbar: {
    backgroundColor: '#5CDB95',
    color: '#05386B'
  }
}));

export default function Navbar() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = evt => {
    const innerWidth = window.innerWidth;
    if (innerWidth < minWidth || (innerWidth > minWidth && width < minWidth))
      setWidth(innerWidth);
  };
  const tabs = [
    { name: 'Home' },
    { name: 'Account' },
    { name: 'History' },
    {
      name: 'Login using Github'
    }
  ];
  const handleToggle = evt => {
    setOpen(prevState => !prevState);
    open ? setDrawerWidth(0) : setDrawerWidth(200);
  };
  const handleClick = evt => {
    alert('Redirecting to login...');
  };

  // TODO make it look good on mobile devices
  let deltaLogo = (
    <div
      style={{
        backgroundColor: '#000f29',
        backgroundImage: "linear-gradient(to right, #000f29 , #5CDB95)",
        padding: '5px 24px',
        paddingLeft: "30px",
        margin: 0
      }}
    >
      <a href="https://delta.nitt.edu/">
        <img
          alt="delta-logo"
          width="222px"
          src={dwocLogo}
        />
      </a>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" className={styles.navbar}>
        <Toolbar style={{ padding: 0 }}>
          {width < minWidth && (
            <div className={styles.drawerHeader}>
              <Sidebar open={open} drawerWidth={drawerWidth} tabs={tabs} />
              <MenuIcon onClick={handleToggle} />
            </div>
          )}
          {deltaLogo}

          {width > minWidth && (
            <div className={styles.button}>
              {tabs.map((tab, index) => (
                <Button
                  color="inherit"
                  className={styles.button}
                  onClick={handleClick}
                  key={index}
                >
                  <ListItemText primary={tab.name} />
                </Button>
              ))}
              <Button color="inherit" onClick={handleClick}>
                Login using{' '}
                <i className={`devicon-github-plain ${styles.githubBtn}`}></i>
              </Button>
            </div>
          )}
          {width < minWidth && (
            <Button
              color="inherit"
              className={styles.button}
              onClick={handleClick}
            >
              {/* "Login using{' '}
              <i className={`devicon-github-plain ` + styles.githubBtn}></i>" */}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ height: '80px' }}></div>
    </div>
  );
}