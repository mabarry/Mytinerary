import { useState } from "react";
import "./Session.css"

const Session = ({time, businessInfo, activity, handleClick}) => {
    

    return (
        <div className="option-container" onClick={() =>{handleClick(businessInfo, activity)}}>
            <div className="time">{time}</div>
            <div className="activity-name">{activity}</div>
            <img className="business-logo" src={businessInfo.image_url} style={{height: "60px"}}/>
            <div className="title-box">
                <p>{businessInfo.name}</p>
            </div>
        </div>
    );
}

export default Session;
