import React from 'react';
import './App.css';
import Card2 from './components/Projectcard.js';
import Navbar from './components/Navbar'
import CustomizedDialogs from './components/Projectcard'
import Timeline from './components/Timeline'

function App() {
	return (
		<div className="App">
      <header className="App-header">
			  <Navbar />
        <CustomizedDialogs />
        <Card2 />
				<Timeline/>
      </header>
		</div>
	);
}

export default App;
