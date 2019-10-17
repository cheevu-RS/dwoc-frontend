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

const header1 = {
  color: "pink",
  font: "Consolas",
  fontSize: "55px"
};

const header2 = {
  padding: "0 10px",
  color: "#ffffff",
  fontSize: "40px",
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: 700
};

const paragraph = {
  padding: "11px",
  fontSize: "28px",
  fontFamily: "Open Sans"
};

const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

const section = {
  minHeight: screenHeight // i.e. 80% of screen height
};

const about = {
  width: "90%",
  margin: "auto",
  height: "100%",
  minHeight: screenHeight / 2, // i.e. 80% of screen height
  display: "block",
  textAlign: "center"
};

const header3 = {
  color: "pink",
  fontSize: "29px",
  fontFamily: "Mansalva"
};

const orgs = {
  paddingTop: screenHeight / 4,
  width: "90%",
  display: "block",
  margin: "auto"
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
  orgs
};
