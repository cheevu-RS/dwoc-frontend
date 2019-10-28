import React, { useState} from 'react';

// Subcomponent imports
import Timeline from '../../components/Timeline/Timeline';
import OrgCards from '../../components/OrgCards/OrgCards';
import Footer from '../../components/Footer/Footer';

// Animation imports
import Reveal from 'react-reveal/Reveal';
import Pulse from 'react-reveal/Pulse';
import Flip from 'react-reveal/Flip';
import Tilt from 'react-tilt'

// Style imports
import WebFont from 'webfontloader';
import {
  header2,
  paragraph,
  section,
  screenHeight,
  about
} from '../../DwocStyles';
import { makeStyles } from '@material-ui/core/styles';
import './LandingPage.css'


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
  header2: header2,
  paragraph: paragraph,
  section: section,
  about: about,
}));

const minWidth = 550;

function LandingPage(props) {

  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  const role=props.role;

  let timeline = (
    <div>
      {width < minWidth&& (<Timeline width={"85%"}/>)}
      {width > minWidth&& (<Timeline />)}
    </div>
  );

  return (
    <div style={{ paddingBottom: '0px', marginBottom: '0px', paddingTop: '10px', paddingLeft: '10px' }}>
      <Reveal>
        <Pulse>
          <div>
            <div>
              <img
                alt="1+"
                src={require('../../assets/images/OPN_WoT.png')}
                width="70"
              />
            </div>
          <Tilt className="Tilt" options={{ max : 25 }} >
            <div className={classes.section} style={{marginTop: (screenHeight/4) - 100}}>
            <img
              alt="dwocLogo"
              className="landingimg"
              src={require('../../assets/images/dwocfull-transparentW.png')}
            />
            </div>
          </Tilt>

          </div>

        </Pulse>
      </Reveal>
      <Reveal>
          <div id="about" className={classes.about}>
            <Flip left>
            <h2 className={classes.header2} >About</h2>
            </Flip>
            <p className={classes.paragraph}>
              DWoC is a winter long program organised by{' '}
              <a href="https://delta.nitt.edu" style={{ color: '#5CDB95' }}>
                Delta Force
              </a>
              , the coding club of NIT Trichy. With an aim to support and
              improve the culture of open source software around us, this serves
              as a platform for young student developers (or even starters) to
              hone their technical skills by taking up projects of their
              interests. We hope this encourages collabrative experiences and
              allows students from all backgrounds to contribute to quality
              technical projects from diverse fields.
            </p>
          </div>
      </Reveal>
      <br />
      <br />
      <Reveal>
          <div id="about" className={classes.about}>
            <Flip left>
            <h2 className={classes.header2}>Why Delta Winter of Code?</h2>
            </Flip>
            <p className={classes.paragraph}>
            Delta, the coding club of NIT Trichy, with 25 years of history and quality projects under its belt opens the door for the very
            first time and invites you to spend your winter working on one of a kind projects alongside experienced mentors to
            create technology that is impactful and meaningful.
            </p>
          </div>
      </Reveal>

      <Reveal>
        {timeline}
      </Reveal>
      <Reveal><Pulse><OrgCards role={role} /></Pulse></Reveal>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
