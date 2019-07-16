import React from "react";
import FeedbackCard from "../feedback_card/FeedbackCard";

import "./feedbacklist.css";

const FeedbackList = ({ feedbackList }) => {
  return (
    <div className="feedback-list-container">
      <div className="feedback-header-container">
        <span>Lastest Events</span>
      </div>
      <div className="feedback-cards-container">
        {feedbackList.map(item => {
          return <FeedbackCard event={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default FeedbackList;
