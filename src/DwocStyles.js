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
const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

const header1 = {
  color: 'pink',
  font: 'Consolas',
  fontSize: '55px'
};

const header2 = {
  padding: '0 10px',
  color: '#ffffff',
  fontSize: '40px',
  //fontFamily:  'Liu Jian Mao Cao',

  //fontFamily: 'Titillium Web',
  //fontFamily: 'Roboto Mono',
  fontFamily: 'Poppins',

  fontWeight: 700
};

const paragraph = {
  padding: '11px',
  width: ' 95%',
  maxWidth: '1000px',
  fontSize: '22px',
  //fontFamily: 'Open Sans',
  fontFamily: 'Lato',
  margin: 'auto',
  textAlign: 'left'
};

const section = {
  minHeight: screenHeight, // i.e. 80% of screen height
  //border: '1px solid white',
  display: 'block'
  //padding: '11px 14px'
};
const header3 = {
  color: 'pink',
  fontSize: '29px',
  fontFamily: 'Mansalva'
};

module.exports = {
  header1,
  header2,
  header3,
  paragraph,
  section,
  screenHeight,
  screenWidth
};
