import Flip from 'react-reveal/Flip';
import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { OrgProjCard } from '../../../DwocStyles';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Source Sans Pro', 'Rubik', 'Lato']
  }
});

const useStyles = makeStyles(theme => ({
  card: {
    //backgroundColor: '#EDF5E1',
    //color: '#05386B',
    //border: '1px solid red',
    marginTop: '30px',
    height: '100%',
    opacity: 100,
    position: 'relative',
    padding: 0,
    color: '#000000',
    ...OrgProjCard
  },
  //card: OrgProjCard,
  title: {
    textAlign: 'left',
    fontSize: 25,
    margin: 0,
    //fontFamily: 'Source Sans Pro'
    fontFamily: 'Rubik',
    color: '#000000',
    padding: '13px 15px 0px 15px'
  },
  mentorName: {
    fontSize: 18,
    lineHeight: 0.8,
    display: 'block',
    padding: '0px 15px'
  },
  description: {
    marginTop: 5,
    fontSize: 17,
    color: '#424242',
    lineHeight: 1.1,
    color: '#424242',
    fontFamily: 'Lato',
    padding: '5px 15px 0px 15px'
  },
  projects: {
    fontSize: 19,
    marginTop: 8,
    textAlign: 'left'
  },
  viewProjectsBtn: {
    color: '#05386B'
  },
  stacks: { padding: '4px 15px 0px 15px' },
  stack: {
    fontSize: 16,
    borderRadius: 5,
    padding: '5px 7px',
    margin: '0px 8px 0px 0',
    backgroundColor: ' purple',
    color: '#ffffff'
  },
  // cardActions: {
  //   paddingTop: '0px',
  //   position: 'absolute',
  //   bottom: 0
  // },
  CardRowTwo: {
    display: 'flex',
    margin: '9px 0 15px 0',
    padding: '0px 8px 7px 8px',
    justifyContent: 'space-evenly',
    borderTop: '1px solid #BDBDBD'
  },
  CardRowTwoElements: {
    flex: 1,
    textAlign: 'center',
    marginTop: 5
  },
  CardRowTwoContent: {
    fontSize: 22,
    margin: 0,
    padding: 0
  },
  CardRowTwoDetail: {
    fontSize: 17,
    margin: 0,
    padding: 0,
    display: 'block',
    lineHeight: 0.6,
    color: '#424242'
  },
  BtnViewProjects: {
    position: 'absolute',
    // bottom: 0,
    fontSize: 16,
    bottom: 2
  }
}));

export default function OrgCard(props) {
  const classes = useStyles();

  console.log(`${JSON.stringify(props)} <= props OrgCars props`);

  const orgPath = '/org/' + props.id + '/' + props.orgName;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      xl={3}
      //style={{ border: '1px solid white', backgroundColor: '#ffffff' }}
    >
      <Card className={classes.card}>
        <div className={classes.title}>{props.orgName}</div>
        <span className={classes.mentorName}>
          by<b> Mentor name</b>
        </span>
        <p className={classes.description}>{props.orgDesc}</p>
        {/* <div style={{ position: 'absolute', bottom: '0' }}> */}
        <div className={classes.stacks}>
          <span className={classes.stack}> JavaScript</span>
          <span className={classes.stack}> JavaScript</span>

          <div className={classes.CardRowTwo}>
            <div className={classes.CardRowTwoElements}>
              <div className={classes.CardRowTwoContent}>44</div>

              <span className={classes.CardRowTwoDetail}> projects</span>
            </div>
            <div className={classes.CardRowTwoElements}>
              <div className={classes.CardRowTwoContent}>44</div>

              <span className={classes.CardRowTwoDetail}> projects</span>
            </div>{' '}
            <div className={classes.CardRowTwoElements}>
              <div className={classes.CardRowTwoContent}>44</div>

              <span className={classes.CardRowTwoDetail}> projects</span>
            </div>
          </div>
          <Button className={classes.BtnViewProjects}>View projects</Button>
        </div>
        {/* </div> */}
      </Card>
    </Grid>
  );
}
