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
import Cookies from 'js-cookie'

import environment from "./Environment";



function App() {
  const [isLogged,toggleIsLogged]=useState(false);
  let role;

  useEffect(()=>{

    });

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
      
        <Router>
          // {/* <Switch>
          <Route path="/" render={(props)=><Navbar {...props} isLogged={isLogged} role={role} />} ></Route>
          <Route exact path="/" render={(props)=><LandingPage role={role}  {...props} isLogged={isLogged} />}  ></Route>
          <Route exact path="/org/:id/:orgName"  render={(props)=><ProjCards {...props} role={role} isLogged={isLogged} />} ></Route>
          {/* </Switch>
        </Router>
      </div>
      <br />
    </div>
  );
}

export default App;
