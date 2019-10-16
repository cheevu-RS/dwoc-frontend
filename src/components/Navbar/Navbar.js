import { Link } from 'react-router-dom';
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
import dwocLogo from '../..//assets/images/dwocLogoWhite.png';
const minWidth = 700;
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
  const tabs = [
    { name: 'Home' },
    {
      name: 'Login'
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
        padding: '5px 24px',
        borderRadius: '0  60px 66px 0',
        margin: 0
      }}
    >
      {/* <a href="https://delta.nitt.edu/"> */}
      <Link to="/">
        <img alt="delta-logo" width="222px" src={dwocLogo} />
      </Link>
      {/* </a> */}
    </div>
  );

  return (
    <div>
      <AppBar
        style={{
          position: 'fixed',
          overflowX: 'hidden'
        }}
        className={styles.navbar}
      >
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
              {props.isLogged||(
                <Button color="inherit" onClick={handleClick} className={styles.button}>
                  Login using{' '}
                  <i className={`devicon-github-plain ${styles.githubBtn}`}></i>
                </Button>
              )

              }
              { props.isLogged&& (
                <Button color="inherit" onClick={handleClick} className={styles.button}>
                  Logout
                </Button>
              )

              }

            </div>
          )}
          {width < minWidth && (
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
              {props.isLogged||(
                <Button color="inherit" onClick={handleClick} className={styles.button}>
                  Login using{' '}
                  <i className={`devicon-github-plain ${styles.githubBtn}`}></i>
                </Button>
              )

              }
              { props.isLogged&& (
                <Button color="inherit" onClick={handleClick} className={styles.button}>
                  Logout
                </Button>
              )

              }

            </div>



          )}
        </Toolbar>
      </AppBar>
      <div style={{ height: '80px' }}></div>
    </div>
  );
}
