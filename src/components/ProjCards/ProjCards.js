import React from 'react';
import ProjMinCard from '../../components/ProjCards/ProjMinCard/ProjMinCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function LandingPage() {

    return (
        <div style={{marginLeft: "30px", marginRight: "30px"}}>
            <Row>
                <Col><ProjMinCard tools={["C++", "Python"]} taken="0"/></Col>
                <Col><ProjMinCard tools={["JavaScript", "Python"]} taken="1" /></Col>
                <Col><ProjMinCard tools={["Go", "Ruby"]} taken="0" /></Col>
                <Col><ProjMinCard tools={["Rust", "Tensorflow"]} taken="1" /></Col>
            </Row>
            <Row>
                <Col><ProjMinCard tools={["C++", "Python"]} taken="0"/></Col>
                <Col><ProjMinCard tools={["JavaScript", "Python"]} taken="1" /></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    );
}

export default LandingPage;





