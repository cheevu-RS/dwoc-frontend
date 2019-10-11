/* @flow */

import React from 'react';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Projects style={{ color: 'pink' }} />
      {/* <div className="App-header">
        <LandingPage />
      </div> */}
    </div>
  );
}

export default App;
