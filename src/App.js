import React from 'react';
import './App.css';
import ProjectCard,CustomizedDialogs from './components/ProjectCard';
import Navbar from './components/Navbar'
import TimeLine from './components/TimeLine'

function App() {
	return (
		<div className="App">
      <header className="App-header">
			  <Navbar />
        <CustomizedDialogs />
        <ProjectCard />
				<TimeLine/>
      </header>
		</div>
	);
}

export default App;
