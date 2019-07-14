import React from 'react';
import NavBar from './components/navbar/NavBar';
import ProjectList from './components/project_list/ProjectList';
import FeedbackList from './components/feedback_list/FeedbackList';
import GraphicCard from './components/graphic_card/GraphicCard';

import './app.css';


function App() {
  return (
    <>
      <NavBar />
      <div className="dashboard-container">
        <div className="left-panel">
          <ProjectList />
          <FeedbackList/>
        </div>
        <div className="right-panel">
          < GraphicCard/>
        </div>
      </div>
    </>
  );
}

export default App;
