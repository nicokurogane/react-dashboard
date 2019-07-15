import React from "react";
import ChartLegend from "../chart_legend/ChartLegend";

import "./graphiccard.css";

import radarChart from "./radar-charts.jpg";

const GraphinCard = () => {
  return (
    <div className="graphic-card-container">
      <div className="graphic-card-header">
        <span>XX index</span>
      </div>
      <div className="graphic-card-info-container">
        <img src={radarChart} alt="radar chart" className="radar-chart" />
        <div className="chart-scores-container">
          <ChartLegend
            props={{ title: "personal", number: "34", color: "#4263f5" }}
          />
          <div className="vbar-legend" />
          <ChartLegend
            props={{ title: "team", number: "22", color: "#b0240e" }}
          />
          <div className="vbar-legend" />
          <ChartLegend
            props={{ title: "department", number: "23", color: "#d6c90d" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphinCard;
