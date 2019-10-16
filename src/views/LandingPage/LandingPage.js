import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import OrgCards from '../../components/OrgCards/OrgCards';

// Stype imports
import WebFont from 'webfontloader';
import {
  header2,
  paragraph,
  section,
  screenHeight,
  screenWidth,
  about
} from '../../DwocStyles';

import SnowStorm from 'react-snowstorm';

import { makeStyles } from '@material-ui/core/styles';
WebFont.load({
  google: {
    families: [paragraph.fontFamily, header2.fontFamily]
  }
});

console.log(`${screenHeight} <= screenHeight`);
const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: '4px'
  },
  landingImg: {
    display: 'block',
    margin: 'auto'
  },
  wrapme: {
    width: '100%',
    backgroundColor: '#003366'
  },
  header2: header2,
  paragraph: paragraph,
  section: section,
  about: about
}));
// 1280
// 380
// console.log(`${1280 / 380} <= 1280/380`);
// console.log(`${380 / 1280} <= 1280/380 ^-1`);
function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{ position: 'relative' }}>
        <SnowStorm />
        <img
          alt="dwocLogo"
          className={classes.landingImg}
          src={require('../../assets/images/dwoc_logo_white.png')}
          style={{
            width: '50%',
            position: 'absolute',
            //top: '50%',
            left: `25%`,
            top: `${0.5 * screenHeight - 0.5 * screenWidth * 0.296875}px`,
            margin: 'auto',
            transform: 'translateY(-50%, -50%)'
          }}
        />
      </div>
      <div
        id="about"
        className={classes.about}
        style={{
          textAlign: 'center'
        }}
      >
        <h2 className={classes.header2}>About</h2>
        <p className={classes.paragraph}>
          This is a winter long program organised by Delta Force, the coding
          club of NIT Trichy. In a hope to improve the culture of open source
          software around us, we will be opening up projects for you to
          contribute to We hope this encourages collabrative experiences and
          allows students from all backgrounds to contribute to amazin technical
          projects from diverse fields/
        </p>
      </div>
      <Timeline />
      <OrgCards />
    </div>
  );
}

export default LandingPage;
