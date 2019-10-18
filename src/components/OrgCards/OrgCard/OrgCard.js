
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// React relay
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

//Spinner
import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

// Style imports
import { makeStyles } from '@material-ui/core/styles';
import { OrgProjCard, colours } from '../../../DwocStyles';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Source Sans Pro', 'Rubik', 'Lato', 'Roboto Mono']
  }
});

const environment = require('../../../Environment').environment;


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const useStyles = makeStyles(theme => ({
  card: {
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

export default function OrgCard(props) {
  const classes = useStyles();

  console.log(`${JSON.stringify(props)} <= props OrgCars props`);

  const orgPath = '/org/' + props.id + '/' + props.orgName;
  const orgID = props.id;

  let mentorFetch = (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query OrgCardQuery($orgid: MentorWhereInput) {
          mentors(where: $orgid) {
            id
            user{
              firstName
            }
          }
        }
      `}
      variables={{ orgid: { organization: { id: orgID } } }}
      render={({ error, props }) => {
        if (error) {
          console.log(`${error} <= error Relay orgCard.js ${orgPath}`);
          return <div>Error!</div>;
        }
        if (!props) {
          return (
            <div>
              <RingLoader css={override} color={'#5CDB95'} />
            </div>
          );
        }
        console.log(props.mentors);
        let mentorsLen = props.mentors.length;
        let mentors = "";
        for(let i = 0; i<mentorsLen; i++){
          mentors += props.mentors[i].user.firstName;
          // console.log(props.mentors[i].user.firstName);
          if(i!=mentorsLen-1){mentors += ",";}
        }
        console.log(mentors)
        return (
          <b>
            {mentors}
          </b>
        );
      }}
    />
  )

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      xl={3}
    >
      <Card className={classes.card}>
        <div className={classes.title}>{props.orgName}</div>
        {/* <p>{props.id}</p> */}
        
        
        <span className={classes.mentorName}>
          by {mentorFetch}
        </span>
        <div className={classes.description}>{props.orgDesc}</div>
        <div className={classes.stacks}>
          <span
            className={classes.stack}
            style={{ backgroundColor: colours.stack.TypeScript }}
          >
            TypeScript
          </span>
          <span
            className={classes.stack}
            style={{ backgroundColor: colours.stack.JavaScript }}
          >
            JavaScript
          </span>
          <span
            className={classes.stack}
            style={{ backgroundColor: colours.stack.python }}
          >
            Python
          </span> 
          <span
            className={classes.stack}
            style={{ backgroundColor: colours.stack.React }}
          >
            React
          </span>
          <span
            className={classes.stack}
            style={{ backgroundColor: colours.stack.cpp }}
          >
            C++
          </span>
          
        </div>
        <div className={classes.CardRowTwo}>
          <div className={classes.CardRowTwoElements}>
            <div className={classes.CardRowTwoContent}>12</div>

            <span className={classes.CardRowTwoDetail}>Projects</span>
          </div>
          <div className={classes.CardRowTwoElements}>
            <div className={classes.CardRowTwoContent}>32</div>

            <span className={classes.CardRowTwoDetail}> Coders</span>
          </div>{' '}
          <div className={classes.CardRowTwoElements}>
            <div className={classes.CardRowTwoContent}>2</div>

            <span className={classes.CardRowTwoDetail}>Name</span>
          </div>
        </div>
        
          <Link to={orgPath} style={{textAlign: 'center', textDecoration: 'none'}}> 
            <Button className={classes.BtnViewProjects}>VIEW PROJECTS</Button> 
          </Link>
        
      </Card>
    </Grid>
  );
}