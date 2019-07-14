import React from 'react';
import FeedbackCard from '../feedback_card/FeedbackCard';

import './feedbacklist.css';

const FeedbackList = () => {
    return (
        <div className="feedback-list-container">
            <div className="feedback-header-container">
                <span>Lastest Events</span>
            </div>
            <div className="projects-container">
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard /> 
                <FeedbackCard />
                <FeedbackCard />
            </div>
        </div>
    );
}

export default FeedbackList;