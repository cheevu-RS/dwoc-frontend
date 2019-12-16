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
import LandingPage from "./views/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import ProposalForm from "./components/ProposalForm/ProposalForm";
import ProjCards from "./components/ProjCards/ProjCards";
import ViewProposal from "./components/ViewProposal/ViewProposal"
import OrgProposalCount from "./components/ViewProposalCount/OrgProposalCount"
import SnowStorm from "react-snowstorm";

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
  orgs: orgs,
  switch: {
    display: 'flex',
    flexWrap: 'flex'
  }
}));

function App() {

  let [authState, setAuthState] = useState({ isLogged: false, role: null });
  let id;

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


            if (props && !authState.isLogged) {
              id = props.userProfile.id;
              setAuthState({ isLogged: !authState.isLogged, role: props.userProfile.role });
              authState.role = props.userProfile.role

            }
            return <div></div>;
          }}
        />
        <SnowStorm
          excludeMobile={false}
          snowStick={false}
          flakesMax="128"
          vMaxY="1"
          vMaxX="1"
          usePositionFixed={true}
          useTwinkleEffect={true}
        />
        <Router>
          <Route
            path="/"
            render={props => (
              <div>
                <Navbar
                  isLogged={authState.isLogged}
                  role={authState.role}
                  showBtns={true}
                  night={true}
                />
                <div style={{ opacity: '0', height: '40px' }}></div>
              </div>
            )}
          ></Route>
          <Route
            exact
            path="/"
            render={props => (
              <>

                <LandingPage role={authState.role} userId={id}  {...props} isLogged={authState.isLogged} />

              </>
            )}
          ></Route>
          <Route
            exact
            path="/org/:id/:orgName"
            render={props => (
              <>

                <Navbar isLogged={authState.isLogged} role={authState.role} showBtns={false} />
                <ProjCards {...props} userId={id} role={authState.role} isLogged={authState.isLogged} />

              </>
            )}
          ></Route>
          <Route
            exact
            path="/org/:id/:orgName/apply"
            render={props => (
              <>
                <Navbar isLogged={authState.isLogged} role={authState.role} showBtns={false} />
                <ProposalForm {...props} role={authState.role} isLogged={authState.isLogged} />
              </>
            )}
          ></Route>
          <Route
            exact
            path="/proposal"
            render={props => (
              <>
                <Navbar isLogged={authState.isLogged} role={authState.role} showBtns={false} />
                <ViewProposal {...props} role={authState.role} isLogged={authState.isLogged} />
              </>
            )}
          ></Route>
          <Route
            exact
            path="/propsCount"
            render={props => (
              <>
                <Navbar isLogged={isLogged} role={role} showBtns={false} />
                <OrgProposalCount {...props} role={role} isLogged={isLogged} />
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