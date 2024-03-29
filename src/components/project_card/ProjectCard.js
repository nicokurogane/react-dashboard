import React from "react";
import TeamCard from "../team_card/TeamCard";

import "./projectcard.css";

const ProjectCard = ({ project }) => {
  const { image, team, projectDescription, postedBy, timeStatus } = project;
  const data =
    '<span className="project-subject">' +
    postedBy +
    '</span><span className="project-time-status">' +
    timeStatus +
    "</span>";

  return (
    <div className="projectcard-container">
      <div className="project-name">
        <TeamCard teamInfo={{ name: team, icon: image }} />
      </div>
      <div className="project-description">
        <span>{projectDescription}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data }}
        className="project-status-container"
      />
    </div>
  );
};

export default ProjectCard;
