import React from "react";

import TeamCard from '../team_card/TeamCard';

import "./projectcard.css";

const ProjectCard = () => {
  return (
    <div className="projectcard-container">
      <div className="project-name">
        <TeamCard />
      </div>
      <div  className="project-description">
        <span>
          its a inner thing they can't reach and can't reach
        </span>
      </div>
      <div className="project-status-container">
        <span className="project-subject">Science moving bricks</span>
        <span className="project-time-status">2 days ago</span>
      </div>
    </div>
  );
};

export default ProjectCard;
