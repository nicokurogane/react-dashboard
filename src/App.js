import React from 'react';
import NavBar from './components/navbar/NavBar';
import ProjectList from './components/project_list/ProjectList';

import './app.css';


function App() {
  return (
    <>
      <NavBar />
      <div className="dashboard-container">
        <div className="left-panel">
          <ProjectList />
        </div>
        <div className="right-panel">
 
        </div>
      </div>
    </>
  );
}

export default App;
