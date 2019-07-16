import React from "react";
import "./counter.css"

const Counter = (props) => {
    return ( 
        <div className="counter-container">
            <span className="counter-title">{props.title}</span>
            {props.children}
        </div>
     );
}
 
export default Counter;