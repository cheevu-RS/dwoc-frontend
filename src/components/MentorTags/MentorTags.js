import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  mentorTag: {
    flex: 1,
    flexBasis: "20%",
    margin: 15,
    fontSize: 16,
    padding: `10px 6px`,
    transition: `0.1s`,
    borderRadius: 3,
    boxShadow: `0px 3px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0, 0.12)`,
    "&:hover": {
      boxShadow: `0px 0px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0, 0.12)`,
      cursor: "pointer"
    }
  },
  mentorName: {
    paddingLeft: 5
  }
}));

const MentorTags = ({ mentors }) => {
  const classes = useStyles();
  return (
    <Grid container>
      {mentors.map((name, index) => (
        <Grid item className={classes.mentorTag} key={index}>
          <AccountCircleIcon />
          <span className={classes.mentorName}>{name}</span>
        </Grid>
      ))}
    </Grid>
  );
};

export default MentorTags;
