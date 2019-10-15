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
          Delta Winter of Code is a program focused on introducing students to
          open source software development. Students work on a 3 month
          programming project with an open source organization during their
          break from university.
        </p>
      </div>
      <Timeline />
      <OrgCards />
    </div>
  );
}

export default LandingPage;
