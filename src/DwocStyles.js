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

const gridContainer = {
  padding: 4,
  paddingRight: '30px'
};
const header1 = {
  color: '#ffffff',
  fontFamily: 'Poppins',
  fontSize: 50,
  textAlign: 'center',
  fontWeight: 800
};

const header2 = {
  padding: '0 10px',
  color: '#ffffff',
  fontSize: '40px',
  textAlign: 'center',
  fontFamily: 'Poppins',
  fontWeight: 700
};

const header3 = {
  color: 'pink',
  fontSize: '29px',
  fontFamily: 'Mansalva'
};

const paragraph = {
  padding: '11px',
  fontSize: 18,
  lineHeight: 1.3,
  maxWidth: 900,
  margin: 'auto',
  fontFamily: 'Open Sans'
};

const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

const section = {
  minHeight: screenHeight*0.75, // i.e. 80% of screen height
  // backgroundImage: `url(${landingBackImg})`,
  // backgroundColor: "black",
  display: 'block',
  margin: 'auto',
  width: '100%',
  maxHeight: screenHeight*0.75
};

const about = {
  width: '100%',
  margin: 'auto',
  padding: "0% 10%",
  height: '100%',
  minHeight: screenHeight / 3.5,
  display: 'block',
  textAlign: 'justify',
  textJustify: 'inter-character',
};

const timeline = {
  display: 'block', 
  margin: 'auto',
  paddingTop: '100px'
}

const orgs = {
  padding: "0% 5%",
  paddingTop: screenHeight / 10,
  width: '100%',
  display: 'block',
  margin: 'auto',
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

const footer = {
  width: '100%',
};

const OrgProjCard = {
  stacks: {
    padding: '0px 15px',
    fontFamily: 'Roboto Mono',
    display: 'flex',
    flexWrap: 'wrap'
  },
  stack: {
    fontSize: 13,
    borderRadius: 5,
    padding: '4px 7px',
    margin: '0px 8px 4px 0',
    backgroundColor: 'purple',
    color: '#ffffff'
  },
  title: {
    textAlign: 'left',
    fontSize: 26,
    margin: 0,
    fontFamily: 'Rubik',
    color: '#000000',
    padding: '10px 15px 0px 15px'
  },
  description: {
    marginTop: 9,
    fontSize: 17,
    color: '#424242',
    lineHeight: 1.3,
    flex: '1 1 auto',
    fontFamily: 'Lato',
    padding: '5px 15px 0px 15px'
  }
};

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
  colours,
  timeline,
  footer,
  OrgProjCard,
  gridContainer
};
