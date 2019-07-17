import React from "react";
import ProjectCard from "../project_card/ProjectCard";

import "./projectlist.css";

const ProyectList = ({ projectList }) => {
  return (
    <div className="projectlist-container">
      <div className="projectlist-header-container">
        <span>Ongoing project</span>
        <button className="link"> All items</button>
      </div>
      <div className="projects-container">
        {projectList.map(projectItem => {
          return <ProjectCard project={projectItem} key={projectItem.id} />;
        })}
      </div>
    </div>
  );
};

export default ProyectList;
