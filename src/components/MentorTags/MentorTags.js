import React from 'react';
import { makeStyles, Grid, Card } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  mentorGridContainer: {
    display: 'flex',
    padding: 10,
    justifyContent: 'center'
  },
  mentorTag: {
    flex: 1,
    flexDirection: 'row',
    margin: 7,
    flexWrap: 'wrap',
    maxWidth: 400,
    flexBasis: '80%',
    fontSize: 16,
    color: 'black',
    padding: `10px 6px`,
    borderRadius: 4,
    textAlign: 'center',
    //backgroundColor: '#FAFAFA',
    //backgroundColor: '#ECEFF1',
    //backgroundColor: '#CFD8DC',
    backgroundColor: '#E3F2FD',

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
  mentorPhone: {
    fontSize: 20
  },
  mentorEmail: {
    fontSize: 20
  }
}));

const MentorTags = ({ mentors }) => {
  const classes = useStyles();
  console.log(`${JSON.stringify(mentors)} <= mentors in mentortags`);
  return (
    <div className={classes.mentorGridContainer}>
      {' '}
      <Grid container className={classes.mentorGridContainer} spacing={1}>
        {mentors.map(mentor => (
          //<div key={mentor.id} className={classes.mentorElement}>
          //     <Grid item key={mentor.id} xs={12} sm={6} md={4} xl={3}>
          <div className={classes.mentorTag}>
            {/* <AccountCircleIcon /> */}

            <span className={classes.mentorName}>
              {`${mentor.user.firstName} ${mentor.user.LastName}`}
            </span>
            <br />
            <a href={`https://github.com/${mentor.user.githubHandle}`}>
              <span
                className={classes.mentorGitHub}
              >{`@${mentor.user.githubHandle}`}</span>
            </a>
            <br />

            {mentor.user.mobileNumber ? (
              <span className={classes.mentorPhone}>
                Phone: {mentor.user.mobileNumber}
              </span>
            ) : null}

            <br />
            {mentor.user.email ? (
              <span className={classes.mentorEmail}>Email: {mentor.user.email}</span>
            ) : null}
          </div>
          // </Grid>
          //</div>
        ))}
      </Grid>
    </div>
  );
};

export default MentorTags;
