import React from 'react';
import './projectcard.css';

const ProjectCard = () => {
    return ( 
        <div className="projectcard-container">
            <div>
                <img alt="logo"></img>
                <span>Aliplay</span>
            </div>
            <div>
                <span className="project-description">its a inner thing they can't reach and can't reach</span>
            </div>
            <div className="project-status-container">
                <span className="project-subject">Science moving bricks</span>
                <span className="project-time-status">2 days ago</span>
            </div>
        </div>
     );
}
 
export default ProjectCard;