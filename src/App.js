/* @flow */

import React from 'react';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjCards from './components/ProjCards/ProjCards';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/org/:id/:orgName" component={ProjCards}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
