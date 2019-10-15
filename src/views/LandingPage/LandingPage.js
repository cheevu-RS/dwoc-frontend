import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import OrgCards from '../../components/OrgCards/OrgCards';

// Stype imports
import WebFont from 'webfontloader';
import { header2, paragraph } from '../../DwocStyles';

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
  header2: header2,
  paragraph: paragraph
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <div id="about">
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
