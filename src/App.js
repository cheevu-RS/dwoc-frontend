/* @flow */

import React , {useState,useEffect} from 'react';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {QueryRenderer} from "react-relay"
import graphql from 'babel-plugin-relay/macro';
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




function App() {
  const [isLogged,toggleIsLogged]=useState(false);
  let role;
  const classes = useStyles();
  Cookies.set('name', 'value');
  console.log( Cookies.get() );  

  return (
    <div className="App">

    <QueryRenderer
    environment={environment}
    query={graphql`
      query AppQuery {
        userProfile{
          id
          role
        }
    `}
    variables={{}}
    render={({error,props})=>{
          if(error)
          console.log(error);
          if(props){
            let cookieData=JSON.parse(Cookies.get("dwoc_user_session"));
            if(cookieData.id==props.id){
              toggleIsLogged(true);
              role=props.role;
              console.log("hi");
            }
            else{
              console.log("gg");
            }
          }
            console.log(props);
        return (<div>Hello world</div>);
      }}
     />

      <div className="App-header">
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
    /> 

        {/* <Navbar /> */}
        <SnowStorm />
        <Router>
          <Route path="/" component={Navbar}></Route>
          <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/org/:id/:orgName" component={ProjCards}></Route>
          </Switch>
      
        <Router>
          <Route path="/" render={(props)=><Navbar {...props} isLogged={isLogged} role={role} />} ></Route>
          <Route exact path="/" render={(props)=><LandingPage role={role}  {...props} isLogged={isLogged} />}  ></Route>
          <Route exact path="/org/:id/:orgName"  render={(props)=><ProjCards {...props} role={role} isLogged={isLogged} />} ></Route>
        </Router>
      </div>
      <br />
    </div>
  );
}

export default App;
