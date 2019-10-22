import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  mentorTag: {
    flex: 1,
    flexBasis: '20%',
    margin: 15,
    fontSize: 16,
    color: 'black',
    padding: `10px 6px`,
    transition: `0.1s`,
    borderRadius: 3,
    textAlign: 'center',
    //backgroundColor: '#FAFAFA',
    //backgroundColor: '#ECEFF1',
    backgroundColor: '#CFD8DC',

    boxShadow: `0px 3px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0, 0.12)`,
    '&:hover': {
      boxShadow: `0px 0px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0, 0.12)`,
      cursor: 'pointer'
    }
  },
  mentorName: {
    paddingLeft: 5,
    fontSize: 24
  },
  mentorGitHub: {
    color: 'black',
    fontSize: 18,
    lineHeight: 0.9,
    textDecoration: 'underline'
  },
  mentorPhone: {},
  mentorEmail: {}
}));

const MentorTags = ({ mentors }) => {
  const classes = useStyles();
  console.log(`${JSON.stringify(mentors)} <= mentors in mentortags`);
  return (
    <Grid container>
      {mentors.map(mentor => (
        <Grid item className={classes.mentorTag} key={mentor.id}>
          {/* <AccountCircleIcon /> */}

          <span className={classes.mentorName}>
            {`${mentor.user.firstName} ${mentor.user.LastName}`}
          </span>
          <br />
          <a href={`https://github.com/${mentor.user.githubHandle}`}>
            <span className={classes.mentorGitHub}>{`@${mentor.user.githubHandle}`}</span>
          </a>
          <br />

          <span className={classes.mentorPhone}>Phone: {mentor.user.mobileNumber}</span>

          <br />

          <span className={classes.mentorEmail}>Email: {mentor.user.email}</span>
        </Grid>
      ))}
    </Grid>
  );
};

export default MentorTags;
