import React from 'react';

import './teamcard.css';

const TeamCard = ({teamInfo}) => {
    const{name, icon} = teamInfo;
    return (
        <div className="team-card-container">
            <img src={icon} alt="team img" className="team-logo"/>
            <span className="display-name">{name}</span>
        </div>
    );
}

export default TeamCard;