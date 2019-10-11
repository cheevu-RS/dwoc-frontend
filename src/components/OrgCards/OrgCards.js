import React from 'react';
import OrgCard from '../../components/OrgCards/OrgCard/OrgCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { makeStyles } from '@material-ui/core/styles';

import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../Environment';

const useStyles = makeStyles(theme => ({
  container: {
    minWidth: '93%'
  }
}));

export default function LandingPage() {
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
          return <div>Loading...</div>;
        }
        console.log(`${JSON.stringify(props)} <= props in OrgCards  `);
        return (
          <div>
            User ID: props.viewer.id
            {props.organizations.map(org => (
              <OrgCard {...org} key={org.id} />
            ))}
          </div>
        );
      }}
    />
    // <div>
    //   <Container className={classes.container}>
    //     <Row>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //     </Row>
    //     <Row>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //       <Col><OrgCard noOfProjects="3" /></Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}
