/* @flow */

import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./views/LandingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ProjCards from "./components/ProjCards/ProjCards";
import SnowStorm from "react-snowstorm";
import { header2, header3, orgs } from "./DwocStyles";
import { makeStyles } from "@material-ui/core/styles";
import environment from "./Environment";
import Cookies from "js-cookie";

// import OrgCard from './components/OrgCards/OrgCard/OrgCard';

//Spinner
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

// Material UI
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: "4px"
  },
  header2: header2,
  header3: header3,
  orgs: orgs
}));

function App() {
  let [isLogged, toggleIsLogged] = useState(false);

  let role;
  const classes = useStyles();
  // console.log(Cookies.get());
  // console.log(JSON.parse(Cookies.get("dwoc_user_session")).session);

  return (
    <div className="App">
      <div className="App-header">
        <br />
        <br />
        {/* <Navbar /> */}

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
              console.log(`${error} <= error Relay Appjs`);
              return;
            }
            if (!props) {
              return (
                <div>
                  <RingLoader css={override} color={"#5CDB95"} />
                </div>
              );
            }
            if (props && !isLogged) {
              toggleIsLogged(!isLogged);
            }
            return (
              <div>
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
                      <LandingPage role={role} {...props} isLogged={isLogged} />
                    )}
                  ></Route>
                  <Route
                    exact
                    path="/org/:id/:orgName"
                    render={props => (
                      <ProjCards {...props} role={role} isLogged={isLogged} />
                    )}
                  ></Route>
                </Router>
              </div>
            );
          }}
        />

        {isLogged ? <div>Loggd in</div> : <div>Loggd out</div>}
      </div>
      <br />
    </div>
  );
}

export default App;
