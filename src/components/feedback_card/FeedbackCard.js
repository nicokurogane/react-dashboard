import React from 'react';
import './feedbackcard.css';

const FeedbackCard = () => {
    return ( 
        <div className="feedback-container">
            <img src ="https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222" 
            className="feedback-profile_img" alt="profile"></img>
            <div className="feedback-info-container">
                <span>stars of the week in high force grid-day mission, the design of new projects iteration june</span>
                <span>2days ago</span>
            </div>
        </div>
     );
}
 
export default FeedbackCard;