/* @flow */
import React from 'react';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjCards from './components/ProjCards/ProjCards';
import SnowStorm from 'react-snowstorm';
import { header2, header3, orgs } from './DwocStyles';
import { makeStyles } from '@material-ui/core/styles';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from './Environment';
import Cookies from 'js-cookie'

// import OrgCard from './components/OrgCards/OrgCard/OrgCard';

//Spinner
import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

// Material UI
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: '4px'
  },
  header2: header2,
  header3: header3,
  orgs: orgs
}));

function App(props) {

  const classes = useStyles();
  Cookies.set('name', 'value');
  console.log( Cookies.get() );  

  return (
    <div className="App">
      <div className="App-header">
{/* 
      <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery {
          organizations {
            id
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
        console.log(props)
        return (
          <div className={classes.orgs}>
            <h2 className={classes.header2}>Organizations</h2>
            ajs
          </div>
        );
      }}
    /> */}

        {/* <Navbar /> */}
        <SnowStorm />
        <Router>
          <Route path="/" component={Navbar}></Route>
          <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/org/:id/:orgName" component={ProjCards}></Route>
          </Switch>
        </Router>
      </div>
      <br />
    </div>
  );
}

export default App;
