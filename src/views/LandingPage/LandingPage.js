import React from "react";
import Timeline from "../../components/Timeline/Timeline";
import OrgCards from "../../components/OrgCards/OrgCards";
import Reveal from "react-reveal/Reveal";
import Pulse from "react-reveal/Pulse";

// Stype imports
import WebFont from "webfontloader";
import {
  header2,
  paragraph,
  section,
  screenHeight,
  screenWidth,
  about
} from "../../DwocStyles";

import { makeStyles } from "@material-ui/core/styles";
WebFont.load({
  google: {
    families: [paragraph.fontFamily, header2.fontFamily]
  }
});

console.log(`${screenHeight} <= screenHeight`);
const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: "4px"
  },
  landingImg: {
    display: "block",
    margin: "auto"
  },
  wrapme: {
    width: "100%",
    backgroundColor: "#003366"
  },
  header2: header2,
  paragraph: paragraph,
  section: section,
  about: about
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Reveal>
        <Pulse>
          <div className={classes.section}>
            <img
              alt="dwocLogo"
              className={classes.landingImg}
              // src={require('../../assets/images/full-white.png')}
              src={require("../../assets/images/dwocfull-transparentW.png")}
              style={{
                width: "50%",
                position: "absolute",
                left: `25%`,
                top: `${0.5 * screenHeight - 0.5 * screenWidth * 0.296875}px`,
                margin: "auto",
                transform: "translateY(-50%, -50%)"
              }}
            />
          </div>
        </Pulse>
      </Reveal>
      <Reveal>
        <Pulse>
          <div id="about" className={classes.about}>
            <h2 className={classes.header2}>About</h2>
            <p className={classes.paragraph}>
              This is a winter long program organised by{" "}
              <a href="https://delta.nitt.edu" style={{ color: "#008000" }}>
                Delta Force
              </a>
              , the coding club of NIT Trichy. With an aim to support and
              improve the culture of open source software around us, this serves
              as a platform for young student developers(or even starters) to
              hone their technical skills by taking up projects of their
              interests. We hope this encourages collabrative experiences and
              allows students from all backgrounds to contribute to quality
              technical projects from diverse fields.
            </p>
          </div>
        </Pulse>
      </Reveal>
      <Reveal>
        <Timeline />
      </Reveal>
      <Reveal>
        <OrgCards />
      </Reveal>
    </div>
  );
}

export default LandingPage;
