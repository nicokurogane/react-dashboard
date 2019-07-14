import React from 'react';
import ProjectCard from '../project_card/ProjectCard';

import './projectlist.css';

const ProyectList = () => {
    return ( 
        <div className="projectlist-container">
            <div className="projectlist-header-container">
                <span>Ongoing project</span>
                <button className="link"> All items</button>
            </div>
            <div className="projects-container">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>

            </div>
        </div>
     );
}
 
export default ProyectList;