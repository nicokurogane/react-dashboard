import React from 'react';
import Counter from '../counter/Counter';

import './graphiccard.css';

import radarChart from './radar-charts.jpg';



const GraphinCard = () => {
    return (
        <div className="graphic-card-container">
            <div className="graphic-card-header">
                <span>XX index</span>
            </div>
            <div className="graphic-card-info-container">
                <img src={radarChart} alt="radar chart" className="radar-chart"/>
                <div className="chart-scores-container">
                <Counter props={{ title: "personal", number: "34" }} />
                <Counter props={{ title: "team", number: "22" }} />
                <Counter props={{ title: "department", number: "23" }} />
                </div>
            </div>
        </div>
    );
}

export default GraphinCard;