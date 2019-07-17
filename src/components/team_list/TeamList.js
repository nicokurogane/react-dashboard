import React from 'react';
import TeamCard from '../team_card/TeamCard';

import team_logo from "../../image/Boostrap_logo.svg";

import './teamlist.css';

const TeamList = () => {
    const team = { name: "Bootstrap" , icon: team_logo}

    return (
        <div className="team-list-container">
            <div className="team-list-header">
                <span>team</span>
            </div>
            <div className="teams-container">
                <TeamCard teamInfo={team}/>
                <TeamCard teamInfo={team}/>
                <TeamCard teamInfo={team}/>
                <TeamCard teamInfo={team}/>
            </div>
        </div>
    );
}

export default TeamList;