import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import OrgCards from '../../components/OrgCards/OrgCards';

// Stype imports
import WebFont from 'webfontloader';
import { header2, paragraph, about } from '../../DwocStyles';

import SnowStorm from 'react-snowstorm';

import { makeStyles } from '@material-ui/core/styles';
WebFont.load({
  google: {
    families: [paragraph.fontFamily, header2.fontFamily]
  }
});

const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: '4px'
  },
  landingImg: {
      display: "block",
      margin: "auto",
   },
   wrapme: {
      width: "100%",
      backgroundColor: "#003366"
   },
  header2: header2,
  paragraph: paragraph,
  about: about,
}));

function LandingPage() {
  const styles = useStyles();
  return (
    <div>
       <div>
            <SnowStorm />
            <img alt="dwocLogo" className={styles.landingImg} src={require('../../assets/images/dwoc_logo_white.png')} width="50%"/>
      </div>
      <div id="about" className={styles.about} >
        <h2 className={styles.header2}>About</h2>
        <p className={styles.paragraph}>
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