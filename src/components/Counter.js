import React from "react";
import "./counter.css"

const Counter = ({props}) => {
    const {title, number} = props;
    return ( 
        <div className="counter-container">
            <span className="counter-title">{title}</span>
            <span className="counter-number">{number}</span>
        </div>
     );
}
 
export default Counter;