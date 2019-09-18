import React from 'react';
import OrgCard from '../../components/OrgCards/OrgCard/OrgCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  container: {
    minWidth: '93%',
  },
}));


export default function LandingPage() {

  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <Row>
          <Col><OrgCard noOfProjects="3" /></Col>
          <Col><OrgCard noOfProjects="3" /></Col>
          <Col><OrgCard noOfProjects="3" /></Col>
          <Col><OrgCard noOfProjects="3" /></Col>
          <Col><OrgCard noOfProjects="3" /></Col>
        </Row>
        <Row>
          <Col><OrgCard noOfProjects="3" /></Col>
          <Col><OrgCard noOfProjects="3" /></Col>
          <Col><OrgCard noOfProjects="3" /></Col>
          <Col><OrgCard noOfProjects="3" /></Col>
          <Col><OrgCard noOfProjects="3" /></Col>
        </Row>
      </Container>
    </div>
  );
}






