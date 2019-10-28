import React from 'react';

// Subcomponent import
import OrgCard from '../../components/OrgCards/OrgCard/OrgCard';

//Spinner
import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

// Style imports
import WebFont from 'webfontloader';
import { header2, header3, orgs, gridContainer } from './../../DwocStyles';

// Material UI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Relay
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
const environment = require('../../Environment').environment;

WebFont.load({
  google: {
    families: [header2.fontFamily, header3.fontFamily]
  }
});

const useStyles = makeStyles(theme => ({
  gridContainer: gridContainer,
  header2: header2,
  header3: header3,
  orgs: orgs
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function OrgCards(prop) {
  const classes = useStyles();
  const role=prop.role;
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query OrgCardsQuery {
          organizations {
            orgName
            id
            orgSlug
            orgDesc
            githubUrl
            stack
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
        console.log(props.stack);
        return (
          <div className={classes.orgs} id="orgs">
            <h2 className={classes.header2}>Organizations</h2>
            <Grid container className={classes.gridContainer} spacing={3}>
              {props.organizations.map(org => (
                <OrgCard {...org} key={org.id} role={role}  />
              ))}
            </Grid>
            <div style={{ height: '50px' }}></div>
          </div>
        );
      }}
    />
  );
}
