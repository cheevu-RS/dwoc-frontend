import React from 'react';
import ProjMinCard from '../../components/ProjCards/ProjMinCard/ProjMinCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  container: {
    minWidth: '93%',
  },
}));


function LandingPage() {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Row>
                <Col><ProjMinCard tools={["C++", "Python"]} taken="0" /></Col>
                <Col><ProjMinCard tools={["JavaScript", "Python"]} taken="1" /></Col>
                <Col><ProjMinCard tools={["Go", "Ruby"]} taken="0" /></Col>
                <Col><ProjMinCard tools={["Rust", "Tensorflow"]} taken="1" /></Col>
            </Row>
            <Row>
                <Col><ProjMinCard tools={["C++", "Python"]} taken="0" /></Col>
                <Col><ProjMinCard tools={["JavaScript", "Python"]} taken="1" /></Col>
                <Col><ProjMinCard tools={["JavaScript", "Python"]} taken="1" /></Col>
                <Col><ProjMinCard tools={["JavaScript", "Python"]} taken="1" /></Col>
            </Row>
        </Container>
    );
}

export default LandingPage;





