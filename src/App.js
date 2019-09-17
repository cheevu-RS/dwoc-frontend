import React from 'react';
import './App.css';
import Card2 from './components/projectcard.js';
import Navbar from './components/Navbar'
import CustomizedDialogs from './components/projectcard'

function App() {
	return (
		<div className="App">
      <header className="App-header">
			  <Navbar />
        <CustomizedDialogs />
        <Card2 />
      </header>
		</div>
	);
}

export default App;
