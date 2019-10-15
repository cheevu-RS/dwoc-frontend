import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import OrgCards from '../../components/OrgCards/OrgCards';
import SnowStorm from 'react-snowstorm';
import { makeStyles } from "@material-ui/core/styles"
// import './LandingPage.css'

const useStyles = makeStyles(theme => ({
   landingImg: {
      display: "block",
      margin: "auto",
   },
   wrapme: {
      width: "100%",
      backgroundColor: "#003366"
   }
 }));

export default function LandingPage() {
   
   const styles = useStyles();

   return (
      <div>
         <div>
            <SnowStorm />
            <img alt="dwocLogo" className={styles.landingImg} src={require('../../assets/images/dwoc_logo_white.png')} width="50%"/>
         </div>

         <Timeline />
         <OrgCards />
        
      </div>
   );
}


// 2JnGKsdB


