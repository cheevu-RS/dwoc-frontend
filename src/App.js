/* @flow */

import React from 'react';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjCards from './components/ProjCards/ProjCards';
// import ProposalForm from './components/ProposalForm/ProposalForm';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <ProposalForm /> */}
        <Router>
          {/* <Switch> */}

          <Route path="/" component={Navbar}></Route>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/org/:id/:orgName" component={ProjCards}></Route>
          {/* </Switch> */}
        </Router>
      </div>
      <br />
      {/* <div
        style={{
          height: '100px',
          width: '10%',
          border: '14px solid white',
          backgroundImage: 'linear-gradient(to right, gray, lightgray)'
        }}
      ></div> */}
    </div>
  );
}

export default App;
