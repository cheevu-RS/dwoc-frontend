// React with hooks
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

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
import dwoc from '../../assets/images/logo-only-transparent.png';

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

const nav = function Navbar(props) {
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

  if (props.showBtns) defaultBtns = [
    { name: "Timeline", to: "timeline" },
    { name: "Organizations", to: "orgs" },
    { name: "Help", to: "help" }
  ];

  let [tabs, setTabs] = useState({
    name: 'Login with Github',
    link: 'https://dwoc.io/dwocb/login'
  });

  // console.log(props);

  useEffect(() => {
    // Update the document title using the browser API

    if (props.isLogged) {
      setTabs({ name: 'Logout', link: 'https://dwoc.io/dwocb/logout' });
    } else {
      setTabs({
        name: 'Login with Github',
        link: 'https://dwoc.io/dwocb/login'
      });
    }
  }, [props.isLogged]);

  const handleToggle = evt => {
    setOpen(prevState => !prevState);
    // open ? setDrawerWidth(0) : setDrawerWidth(200);
  };

  // TODO make it look good on mobile devices

  let dwocLogo = (
    <div>
      <a href='/'>
        <img src={dwoc} width="50px" alt='dwoc' />
      </a>
    </div>
  )

  let navbar = (
    <div>
      {width < minWidth && (
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: '#5CDB95'
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
            {dwocLogo}
          </div>
        </Toolbar>
      )}

      {width > minWidth && (
        <Toolbar>
          {dwocLogo}
          <div className={styles.nightButton} style={{ marginBottom: '6px' }}>
            {defaultBtns.map((tab, index) => (
              <Button className={styles.nightButton} key={index}>
                <Link smooth={true} to={tab.to} style={{ color: '#fff' }}>
                  <ListItemText primary={tab.name} />

                </Link>
              </Button>
            ))}
            {(
              <Button className={styles.nightButton} href={tabs.link} >
                <ListItemText primary={tabs.name} style={{ color: '#fff' }} />
              </Button>
            )}
          </div>
        </Toolbar>
      )}
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" className={styles.nightNavbar}><div>{navbar}</div></AppBar>
    </div>
  );
}
export default withRouter(nav);
