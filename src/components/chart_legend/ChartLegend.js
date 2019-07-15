import React from 'react';

import './chartlegend.css';

const ChartLegend = ({props}) =>{
    const{title, number, color} =props;

    return(
       <div className="chart-legend-container">
           <div className ="legend-title-color-container">
               <span className="color-container" style={{backgroundColor: color}}></span>
               <span className="title-container">{title}</span>
           </div>
           <div className="legend-number">{number}</div>
       </div>
    );
}

export default ChartLegend;