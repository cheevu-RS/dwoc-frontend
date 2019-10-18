/* @flow */
import React from "react";

// import "./ProjMinCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import ProjMaxCard from "../ProjMaxCard/ProjMaxCard";

import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// Style imports
import { OrgProjCard, colours } from '../../../DwocStyles';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Source Sans Pro', 'Rubik', 'Lato', 'Roboto Mono']
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
    display: 'flex',
    flexFlow: 'column',
    padding: 0,
    color: '#000000',
    ...OrgProjCard
  },
  //card: OrgProjCard,
  title: {
    textAlign: 'left',
    fontSize: 26,
    margin: 0,
    //fontFamily: 'Source Sans Pro'
    fontFamily: 'Rubik',
    color: '#000000',
    padding: '10px 15px 0px 15px'
  },
  mentorName: {
    fontSize: 16,
    lineHeight: 0.8,
    display: 'block',
    padding: '0px 15px'
  },
  description: {
    marginTop: 9,
    fontSize: 17,
    color: '#424242',
    lineHeight: 1.3,
    color: '#424242',
    flex: '1 1 auto',
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
  stacks: { padding: '0px 15px', fontFamily: 'Roboto Mono' },
  stack: {
    fontSize: 13,
    borderRadius: 5,
    padding: '4px 7px',
    margin: '0px 8px 0px 0',
    backgroundColor: 'purple',
    color: '#ffffff'
  },

  CardRowTwo: {
    flex: '0 1 auto',
    display: 'flex',
    margin: '10px 0 15px 0',
    padding: '0px 8px 0px 8px',
    justifyContent: 'space-evenly',
    borderTop: '1px solid #BDBDBD'
  },
  CardRowTwoElements: {
    flex: 1,
    textAlign: 'center',
    marginTop: 5
  },
  CardRowTwoContent: {
    fontSize: 20,
    margin: 0,
    padding: 0,
    fontWeight: 500
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
    flex: '0 1 auto',
    backgroundColor: '#F6F6F6',
    width: '100%'
  }
}));

export default function ProjMinCard(props) {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      xl={3}
    >
    <Card className={classes.card}>
      <div className={classes.title}>{props.projName}</div>

      <div className={classes.description}>{props.projMinDesc}</div>
      <div className={classes.stacks} style={{display: 'flex', flexWrap: 'wrap'}}>
        <span
          className={classes.stack}
          style={{ backgroundColor: colours.stack.TypeScript, marginTop: '5px' }}
        >
          TypeScript
          </span>
        <span
          className={classes.stack}
          style={{ backgroundColor: colours.stack.JavaScript, marginTop: '5px' }}
        >
          JavaScript
          </span>
        <span
          className={classes.stack}
          style={{ backgroundColor: colours.stack.python, marginTop: '5px' }}
        >
          Python
          </span>
        <span
          className={classes.stack}
          style={{ backgroundColor: colours.stack.React, marginTop: '5px' }}
        >
          React
          </span>
        <span
          className={classes.stack}
          style={{ backgroundColor: colours.stack.cpp, marginTop: '5px' }}
        >
          C++
          </span>
      </div>
      <CardActions>
        <ProjMaxCard btnText="Read more" orgName={props.orgName} projName={props.projName} projDesc={props.projDesc} taken={props.taken} isLogged={props.isLogged} {...props} />
      </CardActions>
    </Card>
    </Grid>
  );
}
