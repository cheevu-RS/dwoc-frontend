import React from 'react';
import { Grid, Typography, CssBaseline, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // position: `absolute`,
    bottom: 0,
    width: `100%`
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#282c34',
    display: 'flex'
  },
  footerHead: {
    fontWeight: '500'
  },
  footerSection: {
    padding: 10,
    textAlign: `center`
  },
  footerLinksWrapper: {
    listStyle: 'none',
    paddingLeft: 0,
    width: `100%`
  },
  footerLinksItem: {
    padding: 5,
    paddingLeft: 0
  },
  footerLinks: {
    '&:hover': {
      color: `rgba(255, 255, 255, 0.7)`
    }
  }
  // footerLinkIcon: {
  //     transition: `0.5s`,
  //     '&:hover': {
  //         transform: `rotateZ(180deg)`
  //     }
  // }
}));

export default function Footer() {
  const classes = useStyles();
  const sections = [
    {
      heading: 'Community',
      items: [
        { title: 'Github', link: 'https://www.github.com' },
        { title: 'Twitter', link: 'https://twitter.com' }
      ]
    },
    {
      heading: 'Resources',
      items: [
        { title: 'Github', link: 'https://www.github.com' },
        { title: 'Twitter', link: 'https://www.twitter.com' }
      ]
    }
  ];
  return (
    <div className={classes.root}>
      <hr
        style={{
          border: 'none',
          height: 2,
          margin: 0,
          marginTop: 10,
          flexShrink: 0,
          backgroundColor: `rgba(255, 255, 255, 0.12)`
        }}
      />
      <CssBaseline />
      <footer className={classes.footer}>
        <Grid className={classes.footerSection} container>
          <Grid item xs={12}>
            <Typography
              className={classes.footerHead}
              variantMapping={{ body1: 'h2' }}
              variant="body1"
              gutterBottom
            >
              Community
            </Typography>
          </Grid>
          <ul className={classes.footerLinksWrapper}>
            {/* <li className={classes.footerLinksItem}>
                        <a className={classes.footerLinks} href={'https://twitter.com'}><TwitterIcon style={{color:'#00aced'}} className={classes.footerLinkIcon}/></a>
                    </li> */}
            <li className={classes.footerLinksItem}>
              <a
                className={classes.footerLinks}
                href={'https://www.facebook.com/delta.nit.trichy/'}
              >
                <FacebookIcon
                  style={{ color: '#3b5998' }}
                  className={classes.footerLinkIcon}
                />
              </a>
            </li>
          </ul>
        </Grid>
        <Grid className={classes.footerSection} container>
          <Grid item xs={12}>
            <Typography
              className={classes.footerHead}
              variantMapping={{ body1: 'h2' }}
              variant="body1"
              gutterBottom
            >
              Contacts
            </Typography>
          </Grid>
          <ul className={classes.footerLinksWrapper}>
            <li className={classes.footerLinksItem}>
              <Typography
                className={classes.footerHead}
                variantMapping={{ body2: 'h2' }}
                variant="body2"
                gutterBottom
              >
                Abc Def: 0987654321
              </Typography>
            </li>
            <li className={classes.footerLinksItem}>
              <Typography
                className={classes.footerHead}
                variantMapping={{ body2: 'h2' }}
                variant="body2"
                gutterBottom
              >
                Abc Def: 0987654321
              </Typography>
            </li>
          </ul>
        </Grid>
      </footer>
      <div
        style={{
          display: 'block',
          margin: 'auto',
          textAlign: 'center',
          fontSize: '20px'
        }}
      >
        Made with <span style={{ color: 'red' }}>💙</span> by{' '}
        <a href="https://delta.nitt.edu" style={{ color: '#5CDB95' }}>
          Delta Force
        </a>
      </div>
    </div>
  );
}
