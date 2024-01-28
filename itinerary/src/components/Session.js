import { useState } from "react";
import "./Session.css"

const Session = ({time, businessInfo, activity}) => {
    

    return (
        <div className="option-container">
            <div className="time">8AM</div>
            <img className="business-logo"/>
            <div className="title-box">
                <p></p>
            </div>
        </div>
    );
}

export default Session;
