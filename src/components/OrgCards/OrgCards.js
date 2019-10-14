import React from 'react';
import OrgCard from '../../components/OrgCards/OrgCard/OrgCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';

import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../Environment';

const useStyles = makeStyles(theme => ({
  // container: {
  //   minWidth: '93%'
  // }

  gridContainer: {
    padding: '4px'
  }
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function OrgCards() {
  const classes = useStyles();

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query OrgCardsQuery {
          organizations {
            orgName
            id
            orgDesc
            githubUrl
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          console.log(`${error} <= error Relay OrgCards`);
          return <div>Error!</div>;
        }
        if (!props) {
          return (
            <div>
              <RingLoader css={override} color={'#5CDB95'} />
            </div>
          );
        }
        return (
          <Grid container className={classes.gridContainer} spacing={1}>
            {props.organizations.map(org => (
              <OrgCard {...org} key={org.id} />
            ))}
          </Grid>
        );
      }}
    />
  );
}
