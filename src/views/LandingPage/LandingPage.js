import React from 'react';

// Subcomponent imports
import Timeline from '../../components/Timeline/Timeline';
import OrgCards from '../../components/OrgCards/OrgCards';
import Footer from '../../components/Footer/Footer';

// Animation imports
import Reveal from 'react-reveal/Reveal';
import Pulse from 'react-reveal/Pulse';
import Flip from 'react-reveal/Flip';

// Style imports
import WebFont from 'webfontloader';
import {
  header2,
  paragraph,
  section,
  screenHeight,
  screenWidth,
  about
} from '../../DwocStyles';
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
  about: about,
  logo: {
    position: 'relative',
    margin: 'auto',
    display: 'block',
    transform: 'translateY(-50%, -50%)',
    width: '50%',
    top: `${0.5 * screenHeight -
      0.5 * screenWidth * 0.296875 +
      100}px`,
    [theme.breakpoints.down('sm')]: {
      width: '65%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      top: `${0.5 * screenHeight -
        0.5 * screenWidth * 0.296875}px`,
    }
  }
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <div style={{ paddingBottom: '0px', marginBottom: '0px' }}>
      <Reveal>
        <Pulse>
          <div className={classes.section}>
            <img
              alt="dwocLogo"
              className={classes.landingImg}
              src={require('../../assets/images/dwocfull-transparentW.png')}
              className={classes.logo}
            />
          </div>
        </Pulse>
      </Reveal>
      <Reveal>
        <div id="about" className={classes.about}>
          <Flip left>
            <h2 className={classes.header2}>About</h2>
          </Flip>
          <p className={classes.paragraph}>
            This is a winter long program organised by{' '}
            <a href="https://delta.nitt.edu" style={{ color: '#5CDB95' }}>
              Delta Force
            </a>
            , the coding club of NIT Trichy. With an aim to support and improve
            the culture of open source software around us, this serves as a
            platform for young student developers (or even starters) to hone
            their technical skills by taking up projects of their interests. We
            hope this encourages collabrative experiences and allows students
            from all backgrounds to contribute to quality technical projects
            from diverse fields.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <Timeline />
      </Reveal>
      <Reveal>
        <Pulse>
          <OrgCards />
        </Pulse>
      </Reveal>
      <Footer />
    </div>
  );
}

export default LandingPage;
