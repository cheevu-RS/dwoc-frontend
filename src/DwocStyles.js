// Has styles properties to be used thoughout the project
// This will help to easily have consistent styles throughout

// Select fonts from https://fonts.google.com/

// Paste the following block in the component file to load fonts

/*
  WebFont.load({
  google: {
    families: [header2.fontFamily, header3.fontFamily]
  }
});
*/
let landingBackImg = require('./assets/images/rsz_landing.png');
let aboutImg = require('./assets/images/rsz_landing.png')

const header1 = {
  color: 'pink',
  font: 'Consolas',
  fontSize: '55px'
};

const header2 = {
  padding: '0 10px',
  color: '#ffffff',
  fontSize: '40px',
  textAlign: 'center',
  fontFamily: 'Poppins',
  fontWeight: 700,
};

const header3 = {
  color: 'pink',
  fontSize: '29px',
  fontFamily: 'Mansalva'
};

const paragraph = {
  padding: '11px',
  fontSize: 23,
  lineHeight: 1.3,
  fontFamily: 'Open Sans'
};

const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

const section = {
  minHeight: screenHeight, // i.e. 80% of screen height
  backgroundImage: `url(${landingBackImg})`,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
};

const about = {
  width: '100%',
  margin: 'auto',
  padding: "0% 10%",
  paddingTop: screenHeight/4,
  height: '100%',
  minHeight: screenHeight / 1.5,
  display: 'block',
  textAlign: 'justify',
  textJustify: 'inter-character',
  backgroundImage: `url(${aboutImg})`,
  backgroundSize: 'cover',  
  backgroundAttachment: 'fixed'
};

const timeline = {
  backgroundImage: `url(${aboutImg})`,
  backgroundSize: 'cover',  
  backgroundAttachment: 'fixed'
}

// const orgCards = {
//   backgroundImage: `url(${aboutImg})`,
//   backgroundSize: 'cover',  
//   backgroundAttachment: 'fixed'
// }

const orgs = {
  padding: "0% 5%",
  paddingTop: screenHeight / 4,
  width: '100%',
  display: 'block',
  margin: 'auto',
  backgroundImage: `url(${aboutImg})`,
  backgroundSize: 'cover',  
  backgroundAttachment: 'fixed'
};

const colours = {
  stack: {
    JavaScript: '#263238',
    TypeScript: '#3E2723',
    python: '#1A237E',
    cpp: 'black',
    React: 'goldenrod'
  }
};

const OrgProjCard = {
  //backgroundColor: '#ECEFF1',
  //backgroundColor: #E8F5E9
  //backgroundColor: '#B9F6CA',
  //backgroundColor: '#69F0AE',
  //backgroundColor: '#00E676',
  //backgroundImage: 'linear-gradient( #69F0AE, #94f1bc)',
  //color: '#DD2C00',
  //borderBottom: '2px solid #4681fe'
};
const footer = {
  width: '100%',
  backgroundColor: "black"
}

module.exports = {
  header1,
  header2,
  header3,
  paragraph,
  section,
  screenHeight,
  screenWidth,
  about,
  orgs,
  OrgProjCard,
  colours,
  timeline,
  footer
};
