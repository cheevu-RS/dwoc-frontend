/* @flow */
import React, { useState } from 'react';

/*
    BrowserRouter fix for Apache server for proper routing instead of HashRouting:
    Create .htaccess file in the same directory of index.html with this content and build:
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
 */
// React-router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Style imports
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { header2, header3, orgs } from './DwocStyles';

// Subcomponent imports
import LandingPage from './views/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import ProposalForm from './components/ProposalForm/ProposalForm';
import ProjCards from './components/ProjCards/ProjCards';
import SnowStorm from 'react-snowstorm';

//Spinner
import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

// Relay with Env containing session and id in the headers
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
const environment = require('./Environment').environment1;

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

function App() {

  let [isLogged, toggleIsLogged] = useState(true);
  let role;
  const classes = useStyles();

  return (
    <div className="App">
      <div className="App-header">
        <QueryRenderer
          environment={environment}
          query={graphql`
            query AppQuery {
              userProfile {
                id
                role
              }
            }
          `}
          variables={{}}
          render={({ error, props }) => {
            console.log(props);
            if (error) {
              console.log(`${error} <= Relay error Appjs(query userProfile)`);
              return;
            }
            if (!props) {
              return (
                <div>
                  <RingLoader css={override} color={'#5CDB95'} />
                </div>
              );
            }
            if (props && !isLogged) {
              toggleIsLogged(!isLogged);
            }
            return <div></div>;
          }}
        />
        <SnowStorm />
        <Router>
          <Route
            path="/"
            render={props => <Navbar isLogged={isLogged} role={role} />}
          ></Route>
          <Route
            exact
            path="/"
            render={props => (
              <>
              <Navbar isLogged={isLogged} role={role} showBtns={true} />
              <LandingPage role={role} {...props} isLogged={isLogged} />
              </>
            )}
          ></Route>
          <Route
            exact
            path="/org/:id/:orgName"
            render={props => (
              <>
              <Navbar isLogged={isLogged} role={role} showBtns={false} />
              <ProjCards {...props} role={role} isLogged={isLogged} />
              </>
            )}
          ></Route>
          <Route
            exact
            path="/apply"
            render={props => (
              <>
              <Navbar isLogged={isLogged} role={role} showBtns={false} />
              <ProposalForm {...props} role={role} isLogged={isLogged} />
              </>
            )}
          ></Route>
        </Router>
      </div>
      <br />
    </div>
  );
}

export default App;
