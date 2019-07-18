import React from "react";
import "./feedbackcard.css";

const FeedbackCard = ({ event }) => {
  const {
    image,
    normalText1,
    normalText2,
    specialSpan1,
    specialSpan2,
    dayFromStatus
  } = event;

  return (
    <>
    <div className="feedback-container">
      <img src={image} className="feedback-profile_img" alt="profile" />
      <div className="feedback-info-container">
        <div>
          <p className="feedback-info">
          {normalText1}
           <span className="feedback-info-special">{specialSpan1}</span> {normalText2}
           <span className="feedback-info-special">{specialSpan2}</span>
          </p>
        </div>
        <span className="feedback-status-time">{dayFromStatus}</span>
      </div>
    </div> 
    <div className="separator">
    <hr/>
    </div>
    
    </>
  );
};

export default FeedbackCard;
