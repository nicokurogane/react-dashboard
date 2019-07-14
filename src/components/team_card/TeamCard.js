import React from 'react';

import './teamcard.css';

import team_logo from '../../image/Boostrap_logo.svg';

const TeamCard = () => {
    return (
        <div className="team-card-container">
            <img src={team_logo} alt="team img" className="team-logo"/>
            <span>Wu Yanzu</span>
        </div>
    );
}

export default TeamCard;