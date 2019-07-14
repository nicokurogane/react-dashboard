import React from 'react';
import TeamCard from '../team_card/TeamCard';

import './teamlist.css';

const TeamList = () => {
    return (
        <div className="team-list-container">
            <div className="team-list-header">
                <span>team</span>
            </div>
            <div className="team-cards-container">
                <TeamCard/>
               
            </div>
        </div>
    );
}

export default TeamList;