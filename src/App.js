import React from 'react';
import './App.css';
import Card2 from './components/Projectcard.js';
import Navbar from './components/Navbar'
import CustomizedDialogs from './components/Projectcard'

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
