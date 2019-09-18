import React from 'react';
import OrgCard from '../../components/OrgCards/OrgCard/OrgCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPage() {

  return (
    <div style={{marginLeft: "30px", marginRight: "30px"}}>
        <Row>
            <Col><OrgCard noOfProjects="3"/></Col>
            <Col><OrgCard noOfProjects="3"/></Col>
            <Col><OrgCard noOfProjects="3"/></Col>
            <Col><OrgCard noOfProjects="3"/></Col>
        </Row>
        <Row>
            <Col><OrgCard noOfProjects="3"/></Col>
            <Col><OrgCard noOfProjects="3"/></Col>
            <Col></Col>
            <Col></Col>
        </Row>
    </div>
  );
}

export default LandingPage;





